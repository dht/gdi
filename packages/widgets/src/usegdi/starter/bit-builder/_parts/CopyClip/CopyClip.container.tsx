import { useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import { toast } from '@gdi/ui';
import { useMemo } from 'react';
import { CopyClip } from './CopyClip';

export type CopyClipContainerProps = {};

export function CopyClipContainer(_props: CopyClipContainerProps) {
  const sceneBits = useSelector(selectors.raw.$rawSceneBits);
  const sceneDots = useSelector(selectors.raw.$rawSceneDots);
  const sceneAudios = useSelector(selectors.raw.$rawSceneAudios);

  const callbacks = useMemo(
    () => ({
      onCopy: () => {
        // copy to clipboard
        const text = JSON.stringify(
          {
            sceneBits: sceneBits,
            sceneDots: sceneDots,
            sceneAudios: sceneAudios,
          },
          null,
          2
        );

        navigator.clipboard.writeText(text);

        toast.show('Copied to clipboard');
      },
    }),
    [sceneBits, sceneDots, sceneAudios]
  );

  return <CopyClip onCopy={callbacks.onCopy} />;
}

export default CopyClipContainer;
