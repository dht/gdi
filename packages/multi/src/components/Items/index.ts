import { FC } from 'react';
import { ItemArticle } from './ItemArticle/ItemArticle';
import { ItemEvent } from './ItemEvent/ItemEvent';
import { ItemImage } from './ItemImage/ItemImage';
import { ItemImageProps } from './ItemImage/ItemImage';

export type ItemType = 'image' | 'article' | 'event';

export const allItems: Record<ItemType, FC<ItemImageProps>> = {
  // @ts-expect-error
  article: ItemArticle,
  // @ts-expect-error
  event: ItemEvent,
  image: ItemImage,
};
