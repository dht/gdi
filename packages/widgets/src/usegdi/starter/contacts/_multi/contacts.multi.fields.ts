import { ITableField } from 'multi';

export const fields: ITableField[] = [
  {
    id: 'id',
    title: 'Id',
    cellType: 'id',
    params: {
      width: 60,
    },
  },
  {
    id: 'firstName',
    title: 'First Name',
    cellType: 'text',
    flex: 1,
    params: {
      width: 100,
    },
  },
  {
    id: 'lastName',
    title: 'Last Name',
    cellType: 'text',
    flex: 1,
    params: {
      width: 100,
    },
  },
  {
    id: 'phone',
    title: 'Phone',
    cellType: 'text',
    flex: 1,
    params: {
      width: 100,
    },
  },
  {
    id: 'context',
    title: 'Context',
    cellType: 'string',
    params: {
      width: 60,
    },
  },
  {
    id: 'tier',
    title: 'Tier',
    cellType: 'number',
    params: {
      width: 60,
    },
  },
  {
    id: 'week',
    title: 'Week',
    cellType: 'number',
    params: {
      width: 60,
    },
  },
  {
    id: 'tags',
    title: 'Tags',
    cellType: 'tags',
    params: {
      width: 60,
    },
  },
  {
    id: 'imageUrl',
    title: 'ImageUrl',
    cellType: 'image',
    params: {
      width: 60,
    },
  },
];
