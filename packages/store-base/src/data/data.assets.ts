import { IAsset } from '../types';

export const up: IAsset = {
  id: '$up',
  fileName: '..',
  assetUrl: '',
  contentType: 'folder',
  iconName: 'folder',
  tags: [],
  tsAdded: Date.now() / 1000,
  isSticky: true,
};

export const rootList: IAsset[] = [
  {
    id: '$projects',
    fileName: 'Projects',
    assetUrl: '',
    contentType: 'folder',
    iconName: 'folder',
    tags: [],
    tsAdded: Date.now() / 1000,
  },
  {
    id: '$tags',
    fileName: 'Tags',
    assetUrl: '',
    contentType: 'folder',
    iconName: 'folder',
    tags: [],
    tsAdded: Date.now() / 1000,
  },
  {
    id: '$unassigned',
    fileName: 'Unassigned',
    assetUrl: '',
    contentType: 'folder',
    iconName: 'folder',
    tags: [],
    tsAdded: Date.now() / 1000,
  },
];
