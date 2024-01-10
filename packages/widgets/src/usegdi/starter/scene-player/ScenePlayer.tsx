import { ISceneBits } from '@gdi/store-iso';
import { Loader, MultiTrack } from '@gdi/ui';
import { Scene } from 'isokit2';
import { ReactNode } from 'react';
import { MultitrackOptions, MultitrackTracks } from 'wavesurfer-multitrack';
import { Audio, Canvas, Fps, Loading, Panel, Timeline, Wrapper } from './ScenePlayer.style';
import BitTimeline from '../bit-builder/_parts/BitTimeline/BitTimeline';
import { environment } from './ScenePlayer.environment';

export type ScenePlayerProps = {
  waveTracks: MultitrackTracks;
  waveOptions: MultitrackOptions;
  bits: ISceneBits[];
  bitId: string;
  isLoading?: boolean;
  isAudioReady?: boolean;
  isPlaying?: boolean;
  freeMove?: boolean;
  element?: Json;
  cue: number[];
  timeline: ReactNode;
  callbacks: {
    onToolbox: (commandId: string) => void;
    onBit: (verb: string, bitId: string, data?: Json) => void;
  };
  children: ReactNode;
};

export function ScenePlayer(props: ScenePlayerProps) {
  const {
    bits,
    bitId,
    cue,
    isAudioReady,
    isLoading,
    isPlaying,
    freeMove,
    waveTracks,
    waveOptions,
    callbacks,
  } = props;

  function renderMultiTrack() {
    if (!isAudioReady) {
      return (
        <Loading>
          <Loader size={20} />
        </Loading>
      );
    }

    return (
      <MultiTrack
        onBit={(verb: string) => callbacks.onBit(verb, bitId)}
        tracks={waveTracks}
        options={waveOptions}
        cue={cue}
      />
    );
  }

  return (
    <Wrapper className='ScenePlayer-wrapper' data-testid='ScenePlayer-wrapper'>
      <Canvas>
        <Scene
          isLoading={isLoading}
          showToolbox={false}
          freeMove={freeMove}
          disableGizmos
          environment={environment}
        />
        {props.children}
      </Canvas>
      <Panel>
        <Audio>{renderMultiTrack()}</Audio>
        <Timeline className='bits'>
          <BitTimeline bits={bits} bitId={bitId} callbacks={callbacks} />
        </Timeline>
        <Fps id='fps' />
      </Panel>
    </Wrapper>
  );
}

export default ScenePlayer;
