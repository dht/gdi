import { IBit, ISceneState } from '@gdi/store-iso';
import { Scene } from 'isokit2';
import { ReactNode } from 'react';
import { MultitrackOptions, MultitrackTracks } from 'wavesurfer-multitrack';
import BitPanel from '../bit-panel/BitPanel';
import { environment } from './FourthWall.environment';
import { Canvas, Mask, Stage, Wrapper } from './FourthWall.style';

export type FourthWallProps = {
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

export function FourthWall(props: FourthWallProps) {
  return (
    <Wrapper className='FourthWall-wrapper' data-testid='FourthWall-wrapper'>
      <Canvas>
        <Scene
          isLoading={false}
          showToolbox={false}
          freeMove={false}
          hideBase
          environment={environment}
        />
      </Canvas>
      <BitPanel {...props} />
    </Wrapper>
  );
}

export default FourthWall;
