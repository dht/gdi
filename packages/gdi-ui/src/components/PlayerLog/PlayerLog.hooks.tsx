import { useSetState } from 'react-use';
import { Info, infos } from './PlayerLog.data';
import { useCustomEvent } from '../../hooks/useCustomEvent';
import { useMemo, useState } from 'react';

let currentTime = 0;

export function useElementsInfo() {
  const [elementsInfo, patchElementsInfo] = useState<any>(infos);
  const [bit, setBit] = useState<any>({});

  useCustomEvent(
    'log/bit',
    (ev: any) => {
      const { bit } = ev;
      setBit(bit);
    },
    []
  );

  useCustomEvent(
    'log/position',
    (ev: any) => {
      try {
        const { id, keyframe } = ev;
        const { position, rotation } = keyframe;

        patchElementsInfo((state: any) => ({
          ...state,
          [id]: {
            id,
            ...state[id],
            values: {
              position,
              rotation,
              ts: currentTime,
            },
          },
        }));
      } catch (err) {}
    },
    []
  );

  useCustomEvent(
    'log/animation',
    (ev: any) => {
      try {
        const { id, animation } = ev;
        const { from = {}, to = {} } = animation;

        patchElementsInfo((state: any) => ({
          ...state,
          [id]: {
            id,
            ...state[id],
            from: {
              ...from,
              ts: currentTime,
            },
            to: {
              ...to,
            },
          },
        }));
      } catch (err) {}
    },
    []
  );

  useCustomEvent(
    'waveform/timeupdate',
    (ev: any) => {
      currentTime = ev.currentTime;
    },
    []
  );

  const filteredInfos = useMemo(() => {
    const { elements, cameraId } = bit ?? {};

    return Object.values(elementsInfo).filter((i: any) => {
      const { id } = i;
      return elements?.[id] || id === cameraId;
    }) as Info[];
  }, [bit, elementsInfo]);

  return [bit, filteredInfos] as const;
}
