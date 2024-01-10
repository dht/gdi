import { Icon } from '@gdi/ui';
import { Button, Buttons, Row, Stage, Wrapper } from './Playback.style';
import { PlaybackInfo } from './Playback.types';
import { Status } from './_parts/Status/Status';
import { Stopwatch } from './_parts/Stopwatch/Stopwatch';

export type PlaybackProps = {
  playbackInfo: PlaybackInfo;
  callbacks: {
    onPlaybackAction: (verb: string) => void;
  };
};

export function Playback(props: PlaybackProps) {
  const { playbackInfo, callbacks } = props;
  const { playbackStatus, prompt, flavour } = playbackInfo ?? {};

  function renderPlay() {
    if (playbackStatus === 'playing') {
      return (
        <Button onClick={() => callbacks.onPlaybackAction('STOP')}>
          <Icon name='pause' />
        </Button>
      );
    }

    return (
      <Button onClick={() => callbacks.onPlaybackAction('PLAY')}>
        <Icon name='play_arrow' />
      </Button>
    );
  }

  function renderStop() {
    if (playbackStatus === 'idle') {
      return null;
    }

    return (
      <Button onClick={() => callbacks.onPlaybackAction('STOP')}>
        <Icon name='stop' />
      </Button>
    );
  }

  return (
    <Wrapper className='Playback-wrapper' data-testid='Playback-wrapper'>
      <Row>
        <Buttons>
          {renderPlay()}
          {renderStop()}
        </Buttons>
        <Stopwatch playbackInfo={playbackInfo} />

        <Stage>{flavour}</Stage>
      </Row>
      <Status prompt={prompt} />
    </Wrapper>
  );
}

export default Playback;
