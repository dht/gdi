import { useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import { playSfx } from '@gdi/ui';
import { useMemo } from 'react';
import { invokeEvent } from 'shared-base';
import { MakeKeyframe } from './MakeKeyframe';

export type MakeKeyframeContainerProps = {};

export function MakeKeyframeContainer(_props: MakeKeyframeContainerProps) {
  const onDot = useSelector(selectors.base.$onDot);

  const callbacks = useMemo(
    () => ({
      onClick: () => {
        playSfx('keyframe');
        invokeEvent('keyframe/createOrUpdate');
      },
    }),
    []
  );

  if (!onDot) return null;

  return <MakeKeyframe onClick={callbacks.onClick} />;
}

export default MakeKeyframeContainer;
