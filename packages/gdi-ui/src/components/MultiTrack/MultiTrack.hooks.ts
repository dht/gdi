import { get } from 'lodash';
import { RefObject, useEffect, useRef, useState } from 'react';
import { invokeEvent } from 'shared-base';
import MultiTrack from 'wavesurfer-multitrack';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.js';

export function useMultiTrack(ref: RefObject<HTMLDivElement>, params: any, cue: number[]) {
  const { tracks, options } = params;
  const [isPlaying, setIsPlaying] = useState(false);
  const regions = useRef<any>();
  const multiTrack = useRef<MultiTrack>();

  const musicUrl = get(tracks, '[0].url', '');
  const audioUrl = get(tracks, '[1].url', '');

  // init
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    multiTrack.current = MultiTrack.create(tracks, {
      container: ref.current,
      ...options,
    });

    setIsPlaying(false);

    multiTrack.current.on('start-position-change', () => {});

    multiTrack.current.once('canplay', () => {
      const instance: any = get(multiTrack, 'current.wavesurfers[0]');
      const instanceAudio: any = get(multiTrack, 'current.wavesurfers[1]');

      if (!instance || !instanceAudio) {
        return;
      }

      regions.current = RegionsPlugin.create();
      instance.registerPlugin(regions.current);

      const totalTime = instance.getDuration();
      invokeEvent('waveform/ready', { totalTime });

      instance.on('play', () => {
        const currentTime = instance.getCurrentTime();
        invokeEvent('waveform/play', { currentTime });
        setIsPlaying(true);
      });

      instance.on('pause', () => {
        const currentTime = instance.getCurrentTime();
        invokeEvent('waveform/pause', { currentTime });
        setIsPlaying(false);
      });

      instance.on('timeupdate', (currentTime: number) => {
        invokeEvent('waveform/timeupdate', { currentTime });
      });
    });

    return () => {
      multiTrack.current!.destroy();
    };
  }, [ref, musicUrl, audioUrl]);

  useEffect(() => {
    const track: any = get(multiTrack.current, 'current.tracks[0]');
    const instance: any = get(multiTrack.current, 'current.wavesurfers[0]');

    if (!track || !instance) {
      return;
    }
    const duration = instance.getDuration();

    let region: Json = {
      start: 0,
      end: duration,
      color: 'rgba(135, 155, 135, 0.1)',
      drag: false,
    };

    if (cue[0] !== cue[1]) {
      region.start = cue[0] * duration;
      region.end = cue[1] * duration;
    }

    regions.current.regions.forEach((r: any) => r.remove());
    regions.current.addRegion(region);
  }, [cue]);

  return [multiTrack.current as MultiTrack, isPlaying] as const;
}

export function useSpaceOrEnter(callback: any) {
  useEffect(() => {
    function onKeyDown(ev: any) {
      if (ev.keyCode !== 32 && ev.keyCode !== 13) {
        return;
      }

      if (ev.metaKey || ev.ctrlKey || ev.altKey || ev.shiftKey) {
        return;
      }

      callback();
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [callback]);
}
