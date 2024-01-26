import { IBit, ISceneState } from '@gdi/store-iso';
import { CameraPosition, ElementPosition, Scene } from 'isokit2';
import { ReactNode } from 'react';
import { MultitrackOptions, MultitrackTracks } from 'wavesurfer-multitrack';
import BitPanel from '../bit-panel/BitPanel';
import { environment } from './BitBuilder.environment';
import { Canvas, Wrapper } from './BitBuilder.style';

export type BitBuilderProps = {
  waveTracks: MultitrackTracks;
  waveOptions: Partial<MultitrackOptions>;
  bit?: IBit;
  state: ISceneState;
  elementLabels: Json;
  dotId: string;
  hideBase: boolean;
  element?: Json;
  timelines: any[];
  callbacks: {
    onToolbox: (commandId: string) => void;
    onAudio: (verb: string) => void;
    onBit: (verb: string) => void;
  };
  children: ReactNode;
};

export function BitBuilder(props: BitBuilderProps) {
  const { hideBase, callbacks, elementLabels, state } = props;

  return (
    <Wrapper className='BitBuilder-wrapper' data-testid='BitBuilder-wrapper'>
      <Canvas>
        <Scene
          isLoading={state.isLoading}
          showToolbox={true}
          freeMove={state.freeMove}
          hideBase={hideBase}
          hideActions={['add']}
          environment={environment}
          onToolbox={callbacks.onToolbox}
          autoHideExternals={true}
        />
        <CameraPosition onClick={callbacks.onToolbox} />
        <ElementPosition elementLabels={elementLabels} onClick={callbacks.onToolbox} />
        {props.children}
      </Canvas>
      <BitPanel {...props} />
    </Wrapper>
  );
}

export default BitBuilder;
