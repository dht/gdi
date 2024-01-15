import { useRef } from 'react';
import { MobileLayerWrapper } from './MultiTrack.style';
import { invokeEvent } from 'shared-base';

export function MobileLayer(_props: any) {
  const ref = useRef<HTMLDivElement>(null);

  function onClick(ev: any) {
    const percent = ev.clientX / window.innerWidth;
    invokeEvent('waveform/seek', { value: percent });
  }

  return <MobileLayerWrapper ref={ref} onClick={onClick}></MobileLayerWrapper>;
}
