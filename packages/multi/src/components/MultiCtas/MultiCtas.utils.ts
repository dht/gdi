import { IMultiItemDisplay, Json } from '../../types';
import { get } from 'lodash';

export const parseDisplay = (item: Json = {}, display?: IMultiItemDisplay) => {
  const { title = [], subtitle = [] } = display ?? {};

  return {
    title: title
      .map((i) => get(item, i))
      .filter((i) => i)
      .join(' '),
    subtitle: subtitle
      .map((i) => get(item, i))
      .filter((i) => i)
      .join(' | '),
  };
};
