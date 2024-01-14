import { selectors } from '@gdi/store-base';
import { toast } from '@gdi/ui';
import { select } from 'saga-ts';
import { checkIsBoardPage, prepareBoardData } from '../../utils/boards';
import { downloadJson } from 'shared-base';

export function* saveBoardData(action: any) {
  const { destination } = action;

  const isBoardPage = checkIsBoardPage();

  if (!isBoardPage) {
    toast.show('Must be within a board to copy data to clipboard', 'error');
    return;
  }

  const board = yield* select(selectors.raw.$rawBoard);
  const { storeNodes = [] } = board;
  const state = yield* select((i) => i);
  const data = prepareBoardData(state, storeNodes);

  switch (destination) {
    case 'clipboard':
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      toast.show('Board data copied to clipboard');
      break;
    case 'file':
      downloadJson(`board-${board.id}.json`, data);
      break;
  }
}
