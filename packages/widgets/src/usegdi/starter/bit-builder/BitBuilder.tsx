import { IBit, ISceneState } from '@gdi/store-iso';
import { Loader, MultiTrack } from '@gdi/ui';
import { CameraPosition, ElementPosition, Scene } from 'isokit2';
import { ReactNode } from 'react';
import { MultitrackOptions, MultitrackTracks } from 'wavesurfer-multitrack';
import { environment } from './BitBuilder.environment';
import { Audio, BitName, Canvas, Fps, Loading, Panel, Timeline, Wrapper } from './BitBuilder.style';

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
  const {
    bit,
    dotId,
    waveTracks,
    hideBase,
    waveOptions,
    callbacks,
    timelines,
    elementLabels,
    state,
  } = props;

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
      <Panel>
        <Audio>{renderMultiTrack()}</Audio>
        {renderTimelines()}
        <Fps id='fps' />
        <BitName>{bit?.name}</BitName>
      </Panel>
    </Wrapper>
  );
}

export default BitBuilder;
