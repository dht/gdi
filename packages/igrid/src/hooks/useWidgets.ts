import { IElement } from '../grid.types';
import { useDictionary, Verbs } from './useDictionary';

const LOCAL_STORAGE_WIDGETS_KEY = 'LOCAL_STORAGE_WIDGETS_KEY';

type UseWidgetsReturn = [Record<string, IElement>, Verbs<IElement>];

export function useWidgets(
  gridId: string,
  initialValue: Record<string, IElement>
): UseWidgetsReturn {
  return useDictionary<IElement>(initialValue, LOCAL_STORAGE_WIDGETS_KEY + '_' + gridId);
}
