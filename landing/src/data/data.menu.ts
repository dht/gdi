import { uniq } from 'lodash';

export const items = [
  { text: 'Docs', groupId: 'Project', url: '/docs' },
  { text: 'World view', groupId: 'Project', url: '/docs#references/world-view.md' },
  { text: 'Privacy Policy', groupId: 'Project', url: '/privacy' },
  { text: 'Terms of Service', groupId: 'Project', url: '/terms' },
  { text: 'Discord', groupId: 'Community', url: '/docs' },
  { text: 'Twitter', groupId: 'Community', url: 'https://x.com/usegdi_' },
  { text: 'Github', groupId: 'Community', url: 'https://github.com/dht/gdi' },
];

export const groups = uniq(items.map((item) => item.groupId));

export const menuCategories = groups.map((group) => ({
  id: group,
  title: group,
}));

export const menuItems = items.map((item) => ({
  id: item.text,
  title: item.text,
  category: item.groupId,
  path: item.url,
}));

export const menuData = {
  categories: menuCategories,
  items: menuItems,
};