import { CameraPosition, ElementPosition, Scene } from 'isokit2';
import React from 'react';
import { Overlay, Wrapper } from './SceneBuilder.style';
import { environment } from './SceneBuilder.environment';

export type SceneBuilderProps = {
  isLoading?: boolean;
  freeMove?: boolean;
  elementLabels: Json;
  children?: React.ReactNode;
  callbacks: {
    onToolbox: (actionId: string) => void;
  };
};

export function SceneBuilder(props: SceneBuilderProps) {
  const { callbacks, isLoading, freeMove, elementLabels } = props;

  return (
    <Wrapper className='SceneBuilder-wrapper' data-testid='SceneBuilder-wrapper'>
      <Scene
        isLoading={isLoading}
        showToolbox={true}
        hideActions={['bits']}
        environment={environment}
        onToolbox={callbacks.onToolbox}
        freeMove={freeMove}
      />
      <Overlay>
        <CameraPosition onClick={callbacks.onToolbox} />
        <ElementPosition elementLabels={elementLabels} onClick={callbacks.onToolbox} />
        {props.children}
      </Overlay>
    </Wrapper>
  );
}

export default SceneBuilder;
