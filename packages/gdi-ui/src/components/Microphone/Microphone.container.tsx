import { useCallback, useEffect, useState } from 'react';
import { addListener } from 'shared-base';
import Microphone from './Microphone';
import { startSpeechRecognition, stopSpeechRecognition } from './Microphone.utils';

export type MicrophoneContainerProps = {};

export function MicrophoneContainer(props: MicrophoneContainerProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const onStart = useCallback(() => {
    setIsListening(true);
    setTimeout(() => {
      startSpeechRecognition();
    });
  }, [isListening]);

  const onStop = useCallback(() => {
    setIsListening(false);
    stopSpeechRecognition();
  }, [isListening]);

  useEffect(() => {
    const unlisten = addListener('global/speech', (event: any) => {
      const { transcript } = event;
      setTranscript(transcript);
    });

    return () => {
      unlisten();
    };
  });

  return (
    <Microphone
      transcript={transcript}
      isListening={isListening}
      onStart={onStart}
      onStop={onStop}
    />
  );
}

export default MicrophoneContainer;
