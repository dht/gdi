import { useMemo } from 'react';
import { effects } from '../../effects';
import Scene from '../Scene/Scene';
import { environment } from './EffectViewer.environment';
import { Wrapper } from './EffectViewer.style';
import { IPostEffect } from '@gdi/store-iso';

export type EffectViewerProps = {
  url: string;
  effect: IPostEffect;
};

export function EffectViewer(props: EffectViewerProps) {
  const { url, effect } = props;

  return (
    <Wrapper className='EffectViewer-wrapper' data-testid='EffectViewer-wrapper'>
      <Scene
        environment={environment}
        adhocModelUrl={url}
        adhocEffect={effect}
        disableGizmos
        hideBase
      />
    </Wrapper>
  );
}

export default EffectViewer;
