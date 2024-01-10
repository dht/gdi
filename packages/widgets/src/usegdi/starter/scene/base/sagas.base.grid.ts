import { showGrid } from 'isokit2';
import { call, delay, takeEvery } from 'saga-ts';
import { getBoolean, setBoolean } from 'shared-base';
import { predicateSceneState } from '../../../../helpers/predicates';

export function* onGridToggle(action: any) {
  const { payload } = action;
  const { hideGrid } = payload;
  showGrid(!hideGrid);
  setBoolean('HIDE_GRID', hideGrid);
}

export function* bootstrapGrid(action: any) {
  const { payload } = action;
  const { isLoading } = payload;

  if (!isLoading) {
    const hideGrid = getBoolean('HIDE_GRID');
    showGrid(!hideGrid);
  }
}

export function* root() {
  yield takeEvery(predicateSceneState('isLoading'), bootstrapGrid);
  yield takeEvery(predicateSceneState('hideGrid'), onGridToggle);
}

export const saga = {
  id: 'widgets.3d.grid',
  type: 'predicate',
  root: root,
  trigger: {
    xpath: ['sceneState.hideGrid'],
  },
};
