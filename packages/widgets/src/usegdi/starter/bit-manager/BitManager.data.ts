export const list = {
  columns: [
    {
      id: 'iconName',
      type: 'icon',
    },
    {
      id: 'name',
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
      id: 'edit',
      iconName: 'edit',
    },
    {
      id: 'attachment',
      iconName: 'attachment',
      showIf: (item: Json) => item.type === 'basic',
    },
    {
      id: 'clearAttachment',
      iconName: 'link_off',
      showIf: (item: Json) => item.type !== 'basic',
    },
  ],
};
