import { ITableField } from 'multi';

export const fields: ITableField[] = [
  {
    id: 'id',
    title: 'Id',
    cellType: 'id',
    flex: 1,
    params: {
      width: 40,
    },
  },
  {
    id: 'title',
    title: 'Title',
    cellType: 'text',
    flex: 1,
    params: {
      width: 150,
    },
  },
  {
    id: 'tier',
    title: 'Tier',
    cellType: 'number',
    flex: 1,
    params: {
      width: 60,
    },
  },
  {
    id: 'week',
    title: 'Week',
    cellType: 'number',
    flex: 1,
    params: {
      width: 60,
    },
  },
  {
    id: 'tags',
    title: 'Tags',
    cellType: 'tags',
    flex: 1,
    params: {
      width: 150,
    },
  },
  {
    id: 'project',
    title: 'Project',
    cellType: 'text',
    flex: 1,
    params: {},
  },
  {
    id: 'filePath',
    title: 'Path',
    cellType: 'text',
    flex: 1,
    params: {},
  },
];
