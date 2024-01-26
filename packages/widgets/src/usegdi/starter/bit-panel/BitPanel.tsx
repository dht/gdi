import { IBit, ISceneState } from '@gdi/store-iso';
import { Loader, MultiTrack } from '@gdi/ui';
import { ReactNode } from 'react';
import { MultitrackOptions, MultitrackTracks } from 'wavesurfer-multitrack';
import { Audio, BitName, Fps, Loading, Timeline, Wrapper } from './BitPanel.style';

export type BitPanelProps = {
  waveTracks: MultitrackTracks;
  waveOptions: Partial<MultitrackOptions>;
  bit?: IBit;
  state: ISceneState;
  dotId: string;
  element?: Json;
  timelines: any[];
  callbacks: {
    onToolbox: (commandId: string) => void;
    onAudio: (verb: string) => void;
    onBit: (verb: string) => void;
  };
  children: ReactNode;
};

export function BitPanel(props: BitPanelProps) {
  const { bit, dotId, waveTracks, waveOptions, callbacks, timelines, state } = props;

  function renderMultiTrack() {
    if (!state.isAudioReady) {
      return (
        <Loading>
          <Loader size={20} />
        </Loading>
      );
    }

    return (
      <MultiTrack
        onBit={callbacks.onBit}
        onAudio={callbacks.onAudio}
        dotId={dotId}
        tracks={waveTracks}
        options={waveOptions as MultitrackOptions}
        cue={state.cue}
      />
    );
  }

  function renderTimeline(timeline: any, index: number) {
    const Cmp = timeline;

    return (
      <Timeline key={index} className='timeline'>
        <Cmp />
      </Timeline>
    );
  }

  function renderTimelines() {
    return timelines.map((timeline: any, index) => renderTimeline(timeline, index));
  }

  return (
    <Wrapper className='BitPanel-wrapper' data-testid='BitPanel-wrapper'>
      <Audio>{renderMultiTrack()}</Audio>
      {renderTimelines()}
      <Fps id='fps' />
      <BitName>{bit?.name}</BitName>
    </Wrapper>
  );
}

export default BitPanel;
