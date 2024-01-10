import { selectors } from '@gdi/store-iso';
import { select } from 'saga-ts';

export function* findElement(id: string) {
  const elements = yield* select(selectors.base.$elementsList);
  const element = elements.find((element: any) => element.id === id);
  return element;
}
