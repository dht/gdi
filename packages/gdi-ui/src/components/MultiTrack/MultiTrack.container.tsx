import { useMemo, useRef } from 'react';
import { MultitrackOptions, MultitrackTracks } from 'wavesurfer-multitrack';
import { useCustomEvent } from '../../hooks/useCustomEvent';
import { MultiTrack } from './MultiTrack';
import { useMultiTrack, useSpaceOrEnter } from './MultiTrack.hooks';
import { invokeEvent } from 'shared-base';

export type MultiTrackContainerProps = {
  tracks: MultitrackTracks;
  options: MultitrackOptions;
  cue: number[];
  dotId: string;
  onAudio: (verb: string) => void;
  onBit: (verb: string) => void;
};

export function MultiTrackContainer(props: MultiTrackContainerProps) {
  const { tracks, options, dotId, cue } = props;
  const ref = useRef(null);

  const [instance, isPlaying] = useMultiTrack(ref, { tracks, options }, cue);

  const callbacks = useMemo(
    () => ({
      onPlay: () => {
        instance.play();
      },
      onPause: () => {
        instance.pause();
      },
      onToggle: () => {
        if (instance.isPlaying()) {
          instance.pause();
        } else {
          instance.play();
        }
      },
      onNext: () => {
        props.onBit('next');
      },
      onPrevious: () => {
        props.onBit('previous');
      },
      onSplit: () => {
        props.onBit('split');
      },
      onChangeMusic: () => {
        props.onAudio('changeMusic');
      },
      onChangeAudio: () => {
        props.onAudio('changeAudio');
      },
    }),
    [instance, props.onBit]
  );

  useSpaceOrEnter(callbacks.onToggle);

  useCustomEvent(
    'waveform/seek',
    (ev: any) => {
      const { value } = ev;
      instance.seekTo(value);
    },
    [instance]
  );

  useCustomEvent(
    'waveform/refresh',
    () => {
      const currentTime = instance.getCurrentTime();
      invokeEvent('waveform/timeupdate', { currentTime });
    },
    [instance]
  );

  return <MultiTrack divRef={ref} dotId={dotId} isPlaying={isPlaying} callbacks={callbacks} />;
}

export default MultiTrackContainer;
