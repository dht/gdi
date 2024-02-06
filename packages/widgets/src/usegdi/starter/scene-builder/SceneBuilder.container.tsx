import { useDispatch, useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import { useBlackBk } from '@gdi/ui';
import { useMemo } from 'react';
import { useSagas } from '../../../helpers/useSaga';
import { SceneModalsContainer } from '../scene-modals/SceneModals.container';
import { SceneBuilder } from './SceneBuilder';

export type SceneBuilderContainerProps = {};

export function SceneBuilderContainer(_props: SceneBuilderContainerProps) {
  const dispatch = useDispatch();
  const sceneState = useSelector(selectors.raw.$rawSceneState);
  const elementLabels = useSelector(selectors.base.$elementLabels);

  useSagas([
    'widgets.3d.grid',
    'widgets.3d.toolbox',
    'widgets.3d.selection',
    'widgets.scene.bootstrap',
    'widgets.scene.elements',
    'widgets.scene.keys',
    'widgets.scene.live',
    'widgets.scene.onAdd',
    'widgets.scene.onDelete',
    'widgets.scene.onMove',
    'widgets.scene.onVisible',
    'widgets.scene.save',
  ]);

  useBlackBk();

  const callbacks = useMemo(
    () => ({
      onToolbox: (commandId: string) => {
        dispatch({
          type: 'TOOLBOX',
          verb: commandId,
        });
      },
    }),
    []
  );

  return (
    <SceneBuilder
      elementLabels={elementLabels}
      freeMove={sceneState.freeMove}
      isLoading={sceneState.isLoading}
      callbacks={callbacks}
    >
      <SceneModalsContainer />
    </SceneBuilder>
  );
}

export default SceneBuilderContainer;
