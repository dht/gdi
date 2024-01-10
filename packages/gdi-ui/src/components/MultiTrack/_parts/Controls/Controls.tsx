import React, { useState } from 'react';
import { Button, Wrapper } from './Controls.style';
import Time from '../Time/Time';
import Icon from '../../../Icon/Icon';
import { throttle } from 'lodash';
import { useCustomEvent } from '../../../../hooks/useCustomEvent';
import classnames from 'classnames';

export type ControlsProps = {
  isPlaying: boolean;
  dotId: string;
  onPlay: () => void;
  onPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSplit: () => void;
};

export function Controls(props: ControlsProps) {
  const { isPlaying, dotId } = props;
  const [currentTime, setCurrentTime] = useState(0);

  const onTimeUpdate = (value: number) => {
    setCurrentTime(value);
  };

  const onTimeUpdateThrottled = throttle(onTimeUpdate, 100);

  useCustomEvent('waveform/timeupdate', (ev: any) => {
    const { currentTime } = ev;
    onTimeUpdateThrottled(currentTime);
  });

  function renderPlayButton() {
    const iconName = isPlaying ? 'pause' : 'play_arrow';
    const callback = isPlaying ? props.onPause : props.onPlay;

    return (
      <Button onClick={callback}>
        <Icon name={iconName} />
      </Button>
    );
  }

  const className = classnames('Controls-wrapper', {
    hasDot: dotId && dotId !== '',
  });

  return (
    <Wrapper className={className} data-testid='Controls-wrapper'>
      <Button onClick={props.onPrevious}>
        <Icon name='skip_previous' />
      </Button>
      <Button onClick={props.onNext}>
        <Icon name='skip_next' />
      </Button>
      <Time currentTime={currentTime} />
      {renderPlayButton()}
      <Button onClick={props.onSplit}>
        <Icon name='transition_push' />
      </Button>
    </Wrapper>
  );
}

export default Controls;
