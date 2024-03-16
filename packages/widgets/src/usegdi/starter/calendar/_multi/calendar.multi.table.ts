import { ITableConfig } from 'multi';
import { fields } from './calendar.multi.fields';

export const table: ITableConfig = {
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
};
