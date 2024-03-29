import { ITrelloConfig } from 'multi';

export const lanes: ITrelloConfig = {
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
};
