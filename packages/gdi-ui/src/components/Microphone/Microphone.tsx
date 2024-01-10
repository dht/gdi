import { Icon } from '../Icon/Icon';
import { Button, Popup, Record, Top, Transcript, WaveForm, Wrapper } from './Microphone.style';

export type MicrophoneProps = {
  isListening: boolean;
  transcript: string;
  onStart: () => void;
  onStop: () => void;
};

export function Microphone(props: MicrophoneProps) {
  const { transcript, isListening } = props;

  function renderPopup() {
    if (!isListening) {
      return null;
    }

    return (
      <Popup>
        <Top onClick={props.onStop}>
          <Button />
        </Top>
        <WaveForm height={100} className='waveformElement' />
        <Transcript>{transcript}</Transcript>
      </Popup>
    );
  }

  function renderIcon() {
    if (isListening) {
      return <Record onClick={props.onStop} />;
    }

    return <Icon name='mic' onClick={props.onStart} />;
  }

  return (
    <Wrapper className='Microphone-wrapper' data-testid='Microphone-wrapper'>
      {renderIcon()}
      {renderPopup()}
    </Wrapper>
  );
}

export default Microphone;
