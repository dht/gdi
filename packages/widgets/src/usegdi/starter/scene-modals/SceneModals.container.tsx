import { useDispatch, useSelector } from '@gdi/store-base';
import { actions, selectors } from '@gdi/store-iso';
import { allModals } from './SceneModals.components';
import { Panel } from '@gdi/ui';
import { useMemo } from 'react';

export function SceneModalsContainer() {
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawSceneCurrentIds);
  const { modalId } = currentIds;

  const config = allModals[modalId];

  const callbacks = useMemo(
    () => ({
      onClose: () => {
        dispatch(actions.sceneCurrentIds.patch({ modalId: '', editId: '' }));
      },
    }),
    []
  );

  if (!config) {
    return null;
  }

  const { id, title, component: Cmp, width, height, extra } = config;

  return (
    <Panel
      id={id}
      width={width}
      height={height}
      title={title}
      onClose={callbacks.onClose}
      {...extra}
    >
      <Cmp />
    </Panel>
  );
}
