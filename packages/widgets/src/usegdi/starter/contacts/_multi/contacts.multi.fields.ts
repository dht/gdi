import { ITableField } from 'multi';

export const fields: ITableField[] = [
  {
    id: 'id',
    title: 'Id',
    cellType: 'id',
    params: {
      width: 70,
    },
  },
  {
    id: 'firstName',
    title: 'First Name',
    cellType: 'text',
    params: {
      width: 110,
    },
  },
  {
    id: 'lastName',
    title: 'Last Name',
    cellType: 'text',
    params: {
      width: 140,
    },
  },
  {
    id: 'phone',
    title: 'Phone',
    cellType: 'text',
    params: {
      width: 160,
    },
  },
  {
    id: 'context',
    title: 'Context',
    cellType: 'text',
    params: {
      width: 150,
    },
  },
  {
    id: 'tier',
    title: 'Tier',
    cellType: 'text',
    params: {
      width: 80,
    },
  },
  {
    id: 'week',
    title: 'Week',
    cellType: 'text',
    params: {
      width: 80,
    },
  },
  {
    id: 'tags',
    title: 'Tags',
    cellType: 'tags',
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
];
