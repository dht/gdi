import { uniq } from 'lodash';

export const items = [
  { text: 'Docs', groupId: 'Project', url: '/d' },
  { text: 'World view', groupId: 'Project', url: '/d#references/world-view.md' },
  { text: 'Privacy Policy', groupId: 'Project', url: '/privacy' },
  { text: 'Terms of Service', groupId: 'Project', url: '/terms' },
  { text: 'Discord', groupId: 'Community', url: '/d' },
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
