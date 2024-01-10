import React from 'react';
import { Wrapper } from './ModelViewer.style';
import Scene from '../Scene/Scene';
import { environment } from './ModelViewer.environment';

export type ModelViewerProps = {
  url: string;
};

export function ModelViewer(props: ModelViewerProps) {
  const { url } = props;

  return (
    <Wrapper className='ModelViewer-wrapper' data-testid='ModelViewer-wrapper'>
      <Scene environment={environment} adhocModelUrl={url} disableGizmos hideBase />
    </Wrapper>
  );
}

export default ModelViewer;
