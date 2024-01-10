import { format } from '../../utils';
import Icon from '../Icon/Icon';
import { FieldType, Sort, SortDirection } from './List.types';

export const formatCell = (value: string | number, fieldType: FieldType) => {
  switch (fieldType) {
    case 'date':
      return format.date.normal(1000 * (value as number));
    case 'currency':
      return format.number.price(value as number);
    case 'icon':
      return <Icon name={value as any} className='icon' />;
    default:
      return value;
  }
};

export const nextSort = (sort: Sort, fieldName: string) => {
  let direction: SortDirection = sort.direction === 'asc' ? 'desc' : 'asc';

  if (fieldName !== sort.field) {
    direction = 'asc';
  }

  return {
    field: fieldName,
    direction: direction,
  };
};

export const getNextId = (data: Json[], id: string, delta: number) => {
  const index = data.findIndex((item) => item.id === id);
  const nextIndex = Math.max(Math.min(index + delta, data.length - 1), 0);
  const nextItem = data[nextIndex];

  if (nextItem) {
    return nextItem.id;
  }
  const firstItem = data[0];
  const lastItem = data[data.length - 1];

  const nextId = delta > 0 ? firstItem?.id : lastItem?.id;

  return nextId ?? id;
};

export const isModalOpen = () => {
  return document.body.classList.contains('modal-open');
};
