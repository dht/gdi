import { IMultiView, IMultiConfig } from 'multi';

export const initialView: IMultiView = 'sheet';

export const views: IMultiView[] = [
  // 'summary',
  'sheet',
  'table',
  'masonry',
  'calendar',
  'lanes',
  'jsonEditor',
];

const fields = [
  {
    id: 'id',
    title: 'Id',
    cellType: 'id',
  },
  {
    id: 'firstName',
    title: 'firstName',
    cellType: 'text',
    flex: 1,
  },
  {
    id: 'lastName',
    title: 'lastName',
    cellType: 'text',
    flex: 1,
  },
  {
    id: 'imageUrl',
    title: 'ImageUrl',
    cellType: 'image',
    flex: 1,
  },
];

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
    fields,
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
  sheet: {
    fields,
  },
};

export const data: Json[] = [
  {
    id: '1',
    name: 'Alexandra Levinsky',
    firstName: 'Alexandra',
    lastName: 'Levinsky',
    imageUrl:
      'https://lh3.googleusercontent.com/contacts/AG6tpzG7Rrsz-ZGTvVzkfYm7FYRsuYriZcNg0Wmm7q2e3dO4EEBcAyXd',
    email: 'alexa.levinsky@gmail.com',
    phone: '+972546491164',
    linkedin: 'https://www.linkedin.com/in/alexandra-levinsky-0a7b7845',
  },
  {
    id: '2',
    name: 'Michael Fleicher Tal',
    firstName: 'Michael',
    lastName: 'Fleicher Tal',
    imageUrl:
      'https://lh3.googleusercontent.com/contacts/AG6tpzFLCm9Igm8alHkZWzFec_v5ODG-WU5RH8YuP-D6fX-MWVxIwh9Z=s480-p-k-rw-no',
    email: 'michael.fleicher.tal@gmail.com',
    phone: '+972526676906',
    linkedin: 'https://www.linkedin.com/in/michaelfleicher/',
  },
  {
    id: '3',
    name: 'Moti Eden',
    firstName: 'Moti',
    lastName: 'Eden',
    imageUrl:
      'https://lh3.googleusercontent.com/contacts/AG6tpzENNP8zwN0GqD_cs1LcJsKl4zCCnr1_AB4vs2JVN4IFma5ovkGK=s480-p-k-rw-no',
    email: 'motieden52@gmail.com',
    phone: '+972524699110',
    linkedin: 'https://www.linkedin.com/in/mottieden',
  },
  {
    id: '4',
    name: 'Rinat Weiss',
    firstName: 'Rinat',
    lastName: 'Weiss',
    imageUrl:
      'https://lh3.googleusercontent.com/contacts/AG6tpzEOQ8K_TRR_cFoEkBwT6g6L7vwy5450LtpYGvCrV2GQDVBhTLoq=s480-p-k-rw-no',
    email: 'rinatwe@gmail.com',
    phone: '+972543077859',
    linkedin: 'https://www.linkedin.com/in/rinatw/',
  },
  {
    id: '5',
    name: 'Roee Cohen',
    firstName: 'Roee',
    lastName: ' Cohen',
    imageUrl: '',
    email: 'cohenroycpa@gmail.com',
    phone: '+972544696188',
    linkedin: '',
  },
];
