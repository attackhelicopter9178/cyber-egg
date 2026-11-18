import type { Reliability, TokenResource, Validity } from './types';

const CATEGORY_LABEL = {
  domestic: '国内',
  overseas: '国外',
} as const;

const VALIDITY_LABEL: Record<Validity, string> = {
  permanent: '长期',
  daily: '每日',
  monthly: '每月',
  'one-time': '一次性',
  trial: '试用',
  unknown: '待核',
};

const RELIABILITY_LABEL: Record<Reliability, string> = {
  high: '官方核验',
  medium: '交叉核对',
  low: '待自查',
};

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

function createCard(item: TokenResource, index: number): HTMLElement {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.category = item.category;
  card.dataset.reliability = item.reliability;
  card.style.animationDelay = `${Math.min(index, 11) * 40}ms`;

  const head = document.createElement('div');
  head.className = 'card-head';

  const name = document.createElement('h3');
  name.className = 'card-name';
  name.textContent = item.name;

  const badge = document.createElement('span');
  badge.className = 'badge';
  badge.textContent = CATEGORY_LABEL[item.category];

  head.append(name, badge);

  const quota = document.createElement('div');
  quota.className = 'card-quota';
  const validity = document.createElement('span');
  validity.className = `validity validity-${item.validity}`;
  validity.textContent = VALIDITY_LABEL[item.validity];
  validity.title = item.validityNote;
  const quotaText = document.createElement('span');
  quotaText.className = 'quota-text';
  quotaText.textContent = item.quota;
  quota.append(validity, quotaText);

  const description = document.createElement('p');
  description.className = 'card-desc';
  description.textContent = item.description;

  const tags = document.createElement('div');
  tags.className = 'card-tags';
  item.tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.className = 'tag';
    tagEl.textContent = tag;
    tags.append(tagEl);
  });

  const note = document.createElement('p');
  note.className = 'card-note';
  const noteLabel = document.createElement('strong');
  noteLabel.textContent = '领取提示：';
  note.append(noteLabel, document.createTextNode(item.accessNote ?? '前往官方页面查看领取说明'));

  const caveat = document.createElement('p');
  caveat.className = 'card-caveat';
  caveat.textContent = `注意：${item.validityNote}`;

  const footer = document.createElement('div');
  footer.className = 'card-footer';

  const source = document.createElement('div');
  source.className = 'card-source';
  const reliability = document.createElement('span');
  reliability.className = 'reliability';
  reliability.title = item.source;
  const dot = document.createElement('i');
  reliability.append(dot, document.createTextNode(RELIABILITY_LABEL[item.reliability]));
  const verified = document.createElement('span');
  verified.className = 'verified';
  verified.textContent = `核验 ${formatDate(item.verifiedAt)}`;
  source.append(reliability, verified);

  const link = document.createElement('a');
  link.className = 'card-link';
  link.href = item.link;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = '前往获取 →';

  footer.append(source, link);
  card.append(head, quota, description, tags, note, caveat, footer);

  return card;
}

export function renderCards(container: HTMLElement, items: TokenResource[]): void {
  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => fragment.append(createCard(item, index)));
  container.replaceChildren(fragment);
}
