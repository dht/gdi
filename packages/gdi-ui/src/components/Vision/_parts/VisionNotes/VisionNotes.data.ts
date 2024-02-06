import { uniq } from 'lodash';

export const notes: Json[] = [
  {
    id: 'i1',
    title: 'Proposed plan for Day 1:',
    mDate: '2024-02-06 09:41:00',
    content: 'Day 1 kickoff',
    folder: 'Work',
    listGroupId: 'today',
    isSelected: true,
    url: 'https://raw.githubusercontent.com/dht/gdi-assets/main/tutorial/example-001.md',
  },
  {
    id: 'i2',
    title: 'Ideas for screenplay',
    mDate: '2024-02-06 10:15:00',
    content: 'Brainstorming',
    folder: 'Creative',
    listGroupId: 'yesterday',
    url: 'https://raw.githubusercontent.com/dht/gdi-assets/main/tutorial/example-002.md',
  },
  {
    id: 'i3',
    title: 'Tennis scorekeeping',
    mDate: '2024-02-06 10:41:00',
    content: 'Match 5 scores',
    folder: 'Work',
    listGroupId: 'yesterday',
  },
  {
    id: 'i4',
    title: 'Lunch plans',
    mDate: '2024-02-06 11:30:00',
    content: 'Sushi spot?',
    folder: 'Personal',
    listGroupId: 'yesterday',
  },
  {
    id: 'i5',
    title: 'Client feedback',
    mDate: '2024-02-06 12:45:00',
    content: 'Review notes',
    folder: 'Work',
    listGroupId: 'yesterday',
  },
  {
    id: 'i6',
    title: 'Book chapter review',
    mDate: '2024-02-06 14:00:00',
    content: 'Ch. 4 edits',
    folder: 'Creative',
    listGroupId: 'yesterday',
  },
  {
    id: 'i7',
    title: 'Grocery shopping list',
    mDate: '2024-02-06 15:30:00',
    content: '5x Avocado,  tomatoes',
    folder: 'Personal',
    listGroupId: 'yesterday',
  },
  {
    id: 'i8',
    title: 'Workout routine',
    mDate: '2024-02-06 17:20:00',
    content: 'Leg day',
    folder: 'Health',
    listGroupId: 'yesterday',
  },
];

export const groups = ['today', 'yesterday'];
