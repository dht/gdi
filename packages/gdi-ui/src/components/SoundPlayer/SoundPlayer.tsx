import React, { useEffect, useRef, useState } from 'react';
import { Controls, Player, Wrapper } from './SoundPlayer.style';
import WaveSurfer from 'wavesurfer.js';
import { useWavesurfer } from './SoundPlayer.hooks';
import Icon from '../Icon/Icon';
import { downloadHtml, downloadJson } from 'shared-base';

type Options = {
  height: number;
  waveColor: string;
  progressColor: string;
  withTimeline?: boolean;
};

export type SoundPlayerProps = {
  id: string;
  url: string;
  options: Options;
  onReady: (id: string, wavesurfer: WaveSurfer, duration: number) => void;
};

export function SoundPlayer(props: SoundPlayerProps) {
  const { id, url, options } = props;
  const containerRef = useRef();

  const [isPlaying, { toggle }] = useWavesurfer(id, containerRef, url, options, props.onReady);

  function onClick(ev: any) {
    toggle();
  }

  function onDownload() {
    window.open(url, '_blank');
  }

  function renderIcons() {
    const iconName = isPlaying ? 'pause' : 'play_arrow';

    return (
      <>
        <Icon name={iconName} button onClick={onClick} />
        <Icon name='download' button onClick={onDownload} />
      </>
    );
  }

  return (
    <Wrapper className='SoundPlayer-wrapper' data-testid='SoundPlayer-wrapper'>
      <Player ref={containerRef as any} />
      <Controls>{renderIcons()}</Controls>
    </Wrapper>
  );
}

export default SoundPlayer;
