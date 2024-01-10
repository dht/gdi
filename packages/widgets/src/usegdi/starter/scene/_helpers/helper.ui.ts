import { actions, selectors } from '@gdi/store-iso';
import { put, select } from 'saga-ts';

export function* toggleModal(id: string) {
  const currentIds = yield* select(selectors.raw.$rawSceneCurrentIds);
  const { modalId } = currentIds;
  const nextId = modalId === id ? '' : id;
  yield* put(actions.sceneCurrentIds.patch({ editId: '', modalId: nextId }));
}
