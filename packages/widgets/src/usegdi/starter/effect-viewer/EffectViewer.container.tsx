import { selectors, useSelector } from '@gdi/store-base';
import { IPostEffect } from '@gdi/store-iso';
import { EffectViewer } from 'isokit2';

export type EffectViewerContainerProps = {
  effect: IPostEffect;
};

export function EffectViewerContainer(props: EffectViewerContainerProps) {
  const { effect } = props;
  const appState = useSelector(selectors.raw.$rawAppState);
  const { assetsRootUrl } = appState;

  const assetUrl = `${assetsRootUrl}/glb/tree.glb`;

  return <EffectViewer effect={effect} url={assetUrl} />;
}

export default EffectViewerContainer;
