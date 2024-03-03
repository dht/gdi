import { IMultiView, IMultiConfig } from 'multi';

export const initialView: IMultiView = 'sheet';

export const views: IMultiView[] = ['sheet', 'table', 'masonry', 'jsonEditor', 'calendar', 'lanes'];

export const config: IMultiConfig = {
  lanes: {
    id: 'TicketBucket',
    header: 'Tickets',
    titleFieldId: 'summary',
    permutations: [
      {
        id: 'todo',
        title: 'Todo',
        buckets: [
          {
            id: 'backlog',
            title: 'Todo',
            dataTags: ['$other'],
          },
          {
            id: 'doing',
            title: 'Doing',
            dataTags: ['doing'],
          },
          {
            id: 'done',
            title: 'Done',
            dataTags: ['done'],
          },
        ],
      },
      {
        id: 'priority',
        title: 'Priority',
        buckets: [
          {
            id: 'unassigned',
            title: 'Unassigned',
            dataTags: ['$other'],
          },
          {
            id: 'important',
            title: 'important',
            dataTags: ['important'],
          },
          {
            id: 'urgent',
            title: 'urgent',
            dataTags: ['urgent'],
          },
          {
            id: 'importantAndUrgent',
            title: 'Important & urgent',
            dataTags: ['importantAndUrgent'],
          },
          {
            id: 'none',
            title: 'None',
            dataTags: ['none'],
          },
        ],
      },
      {
        id: 'when',
        title: 'When',
        buckets: [
          {
            id: 'today',
            title: 'Today',
            dataTags: ['$today'],
          },
          {
            id: 'tomorrow',
            title: 'Tomorrow',
            dataTags: ['$tomorrow'],
          },
          {
            id: 'later',
            title: 'Later',
            dataTags: ['later'],
          },
          {
            id: 'unassigned',
            title: 'Unassigned',
            dataTags: ['$other'],
          },
        ],
      },
    ],
  },
  masonry: {
    columns: 4,
  },
  table: {
    id: 'LayoutsSubTable',
    header: 'Layouts Items',
    fields: [
      {
        id: 'id',
        title: 'Id',
        cellType: 'id',
      },
      {
        id: 'title',
        title: 'Title',
        cellType: 'text',
        flex: 2,
      },
      {
        id: 'ratio',
        title: 'Ratio',
        cellType: 'text',
        flex: 1,
      },
      {
        id: 'imageUrl',
        title: 'ImageUrl',
        cellType: 'text',
        flex: 1,
      },
    ],
    rowActions: [
      {
        id: 'edit',
        iconName: 'Edit',
        title: 'Edit',
      },
      {
        id: 'delete',
        iconName: 'Delete',
        title: 'Delete',
      },
    ],
    tableActions: [
      {
        id: 'back',
        iconName: 'arrow_upward',
        title: 'Go back',
      },
      {
        id: 'mode',
        iconName: 'view_week',
        title: 'Change mode',
      },
      {
        id: 'new',
        iconName: 'add',
        title: 'New item',
      },
    ],
  },
};

export const data: Json[] = [
  {
    name: 'John Doe',
    title: 'John Doe',
    email: '',
  },
];
