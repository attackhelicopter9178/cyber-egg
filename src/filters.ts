import type { Category, TokenResource } from './types';

export type CategoryFilter = Category | 'all';

export interface FilterOptions {
  category: CategoryFilter;
  keyword: string;
  permanentOnly?: boolean;
}

export function filterResources(resources: TokenResource[], options: FilterOptions): TokenResource[] {
  const query = options.keyword.trim().toLocaleLowerCase();

  return resources.filter((item) => {
    if (options.category !== 'all' && item.category !== options.category) {
      return false;
    }

    if (options.permanentOnly && item.validity !== 'permanent') {
      return false;
    }

    if (!query) {
      return true;
    }

    return [
      item.name,
      item.description,
      item.quota,
      item.accessNote ?? '',
      item.source,
      ...item.tags,
    ]
      .join(' ')
      .toLocaleLowerCase()
      .includes(query);
  });
}
