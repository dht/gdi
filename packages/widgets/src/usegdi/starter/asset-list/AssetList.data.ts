export const columns: Json[] = [
  {
    id: 'icon',
    title: '',
    fieldId: 'iconName',
    fieldType: 'icon',
    width: 30,
  },
  {
    id: 'name',
    title: 'Name',
    fieldId: 'fileName',
    flex: 3,
  },
  {
    id: 'type',
    title: 'Type',
    fieldId: 'contentType',
    flex: 1,
  },
  {
    id: 'modified',
    title: 'Modified',
    fieldId: 'tsAdded',
    fieldType: 'date',
    flex: 2,
  },
];
