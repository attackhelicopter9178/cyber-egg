import rawTokens from './data/tokens.json';
import { filterResources, type CategoryFilter } from './filters';
import { renderCards } from './render';
import type { TokenResource } from './types';
import './styles.css';

const tokens = rawTokens as TokenResource[];

function must<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`缺少必要的页面元素：${selector}`);
  }
  return element;
}

const header = must<HTMLElement>('#siteHeader');
const grid = must<HTMLElement>('#cardGrid');
const emptyState = must<HTMLElement>('#emptyState');
const resultCount = must<HTMLElement>('#resultCount');
const clearButton = must<HTMLButtonElement>('#clearFilters');
const permanentButton = must<HTMLButtonElement>('#permanentOnly');
const searchInput = must<HTMLInputElement>('#searchInput');
const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>('.tab'));

let activeCategory: CategoryFilter = 'all';
let keyword = '';
let permanentOnly = false;
let debounceTimer: number | undefined;

function render(): void {
  const items = filterResources(tokens, {
    category: activeCategory,
    keyword,
    permanentOnly,
  });
  renderCards(grid, items);

  const isEmpty = items.length === 0;
  emptyState.hidden = !isEmpty;
  grid.hidden = isEmpty;

  const categoryName =
    activeCategory === 'all' ? '' : activeCategory === 'domestic' ? ' · 国内' : ' · 国外';
  const keywordName = keyword.trim() ? ` · 关键词「${keyword.trim()}」` : '';
  resultCount.textContent = `共 ${items.length} 个资源${categoryName}${keywordName}`;
  clearButton.hidden = activeCategory === 'all' && !keyword.trim() && !permanentOnly;
}

function setCategory(category: CategoryFilter): void {
  activeCategory = category;
  tabs.forEach((tab) => {
    const isActive = tab.dataset.category === category;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });
  render();
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    setCategory(tab.dataset.category as CategoryFilter);
  });
});

permanentButton.addEventListener('click', () => {
  permanentOnly = !permanentOnly;
  permanentButton.classList.toggle('is-on', permanentOnly);
  permanentButton.setAttribute('aria-pressed', String(permanentOnly));
  render();
});

searchInput.addEventListener('input', () => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(() => {
    keyword = searchInput.value;
    render();
  }, 150);
});

clearButton.addEventListener('click', () => {
  searchInput.value = '';
  keyword = '';
  permanentOnly = false;
  permanentButton.classList.remove('is-on');
  permanentButton.setAttribute('aria-pressed', 'false');
  setCategory('all');
  searchInput.focus();
});

document.addEventListener('keydown', (event) => {
  if (event.key !== '/' || document.activeElement === searchInput) {
    return;
  }
  const target = document.activeElement;
  const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
  if (!isTyping) {
    event.preventDefault();
    searchInput.focus();
  }
});

function renderStats(): void {
  const total = tokens.length;
  const domestic = tokens.filter((item) => item.category === 'domestic').length;
  const permanent = tokens.filter((item) => item.validity === 'permanent').length;
  must<HTMLElement>('#statTotal').textContent = String(total);
  must<HTMLElement>('#statDomestic').textContent = String(domestic);
  must<HTMLElement>('#statOverseas').textContent = String(total - domestic);
  permanentButton.textContent = `仅长期免费 ${permanent}`;
}

function updateHeader(): void {
  header.classList.toggle('is-scrolled', window.scrollY > 16);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
renderStats();
render();
