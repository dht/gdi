import { useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import { useBlackBk } from '@gdi/ui';
import { useMount } from 'react-use';
import { invokeEvent } from 'shared-base';
import { useSagas } from '../../../helpers/useSaga';
import { VisionSimulator } from './VisionSimulator';

export type VisionSimulatorContainerProps = {};

export function VisionSimulatorContainer(_props: VisionSimulatorContainerProps) {
  const assetLoader = useSelector(selectors.preload.$assetLoader);

  useBlackBk();

  useSagas([
    'widgets.visionSimulator', //
    'widgets.scene.bootstrap',
    'widgets.player.characters',
    'widgets.player.loader',
  ]);

  useMount(() => {
    invokeEvent('scene/assets/preload');
  });

  return <VisionSimulator assetLoader={assetLoader} />;
}

export default VisionSimulatorContainer;
