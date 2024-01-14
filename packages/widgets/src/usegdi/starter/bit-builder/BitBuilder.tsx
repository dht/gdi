import { IBit } from '@gdi/store-iso';
import { Loader, MultiTrack } from '@gdi/ui';
import { CameraPosition, ElementPosition, Scene } from 'isokit2';
import { MultitrackOptions, MultitrackTracks } from 'wavesurfer-multitrack';
import { Audio, BitName, Canvas, Fps, Loading, Panel, Timeline, Wrapper } from './BitBuilder.style';
import { ReactNode } from 'react';
import { environment } from './BitBuilder.environment';

export type BitBuilderProps = {
  waveTracks: MultitrackTracks;
  waveOptions: MultitrackOptions;
  bit: IBit;
  elementLabels: Json;
  dotId: string;
  isLoading?: boolean;
  isAudioReady?: boolean;
  freeMove?: boolean;
  element?: Json;
  cue: number[];
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
    cue,
    isAudioReady,
    isLoading,
    freeMove,
    waveTracks,
    waveOptions,
    callbacks,
    timelines,
    elementLabels,
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
        onBit={callbacks.onBit}
        onAudio={callbacks.onAudio}
        dotId={dotId}
        tracks={waveTracks}
        options={waveOptions}
        cue={cue}
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
          isLoading={isLoading}
          showToolbox={true}
          freeMove={freeMove}
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
