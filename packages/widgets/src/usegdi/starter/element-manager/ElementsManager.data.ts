export const list = {
  columns: [
    {
      id: 'iconName',
      type: 'icon',
    },
    {
      id: 'label',
      flex: 1,
    },
    {
      id: 'type',
      type: 'double',
      flex: 1,
      mapFields: {
        value: 'type',
        value2: 'subtype',
      },
    },
  ],
  actions: [
    {
      id: 'editStart',
      iconName: 'edit',
    },
    {
      id: 'toggleElement',
      iconName: 'visibility',
    },
  ],
};
