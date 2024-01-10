import { IBoard, actions } from '@gdi/store-base';
import { isMobile } from '@gdi/ui';
import { put } from 'saga-ts';

export function* onFlowMobileStart(board: IBoard) {
  if (!isMobile() || !board.mobile) {
    return;
  }

  const { mobile } = board;
  const { flowColumnIndex = -1 } = mobile ?? {};

  if (flowColumnIndex >= 0) {
    yield put(actions.appState.patch({ flavourColumnIndex: flowColumnIndex }));
  }
}

export function* onFlowMobileEnd(board: IBoard) {
  if (!isMobile() || !board.mobile) {
    return;
  }

  const { mobile } = board;
  const { outputColumnIndex = -1 } = mobile ?? {};

  if (outputColumnIndex >= 0) {
    yield put(actions.appState.patch({ flavourColumnIndex: outputColumnIndex }));
  }
}
