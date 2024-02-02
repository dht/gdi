import { RefObject } from 'react';
import Icon from '../Icon/Icon';
import { Audio, Content, Icons, Panel, Row, Wrapper } from './MultiTrack.style';
import Controls from './_parts/Controls/Controls';
import { MobileLayer } from './MultiTrack.mobile';

export type MultiTrackProps = {
  isPlaying: boolean;
  dotId: string;
  callbacks: {
    onPlay: () => void;
    onPause: () => void;
    onNext: () => void;
    onPrevious: () => void;
    onSplit: () => void;
    onChangeMusic: () => void;
    onChangeAudio: () => void;
  };
  divRef: RefObject<HTMLDivElement>;
};

export function MultiTrack(props: MultiTrackProps) {
  const { dotId, isPlaying, callbacks, divRef } = props;

  return (
    <Wrapper className='MultiTrack-wrapper' data-testid='MultiTrack-wrapper'>
      <Panel>
        <Controls isPlaying={isPlaying} dotId={dotId} {...callbacks} />
      </Panel>
      <Row>
        <Icons>
          <Icon className='icon' name='music_note' onClick={callbacks.onChangeMusic} />
        </Icons>
        <Content>
          <Audio ref={divRef}></Audio>
        </Content>
        <MobileLayer />
      </Row>
    </Wrapper>
  );
}

export default MultiTrack;
