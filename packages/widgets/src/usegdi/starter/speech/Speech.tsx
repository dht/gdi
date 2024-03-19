import { SoundPlayer } from '@gdi/ui';
import React, { useEffect, useRef } from 'react';
import SavePanelContainer from '../save-panel/SavePanel.container';
import {
  Actions,
  Content,
  Cta,
  Player,
  TextArea,
  Transcript,
  Voices,
  Wrapper,
} from './Speech.style';
import { useMeasure } from 'react-use';

export type SpeechProps = {
  voiceUrl: string;
  value: string;
  callbacks: {
    onSave: () => void;
    onChange: (ev: any) => void;
    onGenerate: () => void;
  };
  children: React.ReactNode;
};

export function Speech(props: SpeechProps) {
  const { voiceUrl, value, callbacks } = props;
  const [ref, { height }] = useMeasure<HTMLDivElement>();
  const refInput = useRef<HTMLTextAreaElement>(null);
  const disabledGenerate = value.trim() === '';
  const disabledSave = voiceUrl === '';

  useEffect(() => {
    if (!refInput.current) {
      return;
    }

    refInput.current.style.height = 'auto';
    refInput.current.style.height = refInput.current.scrollHeight + 'px';
  }, [value]);

  function renderSoundPlayer() {
    if (!voiceUrl) {
      return null;
    }

    const options = {
      height: 100,
      waveColor: '#556',
      progressColor: 'pink',
    };

    return <SoundPlayer id='preview' url={voiceUrl} options={options} onReady={() => {}} />;
  }

  function onKeyDown(ev: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (ev.key === 'Enter' && ev.metaKey) {
      callbacks.onGenerate();
    }
  }

  const style: React.CSSProperties = {
    maxHeight: height ? height + 'px' : 'auto',
    overflowY: 'auto',
  };

  return (
    <Wrapper className='Speech-wrapper' data-testid='Speech-wrapper'>
      <Voices>{props.children}</Voices>
      <Content>
        <Transcript ref={ref} style={style}>
          <TextArea
            ref={refInput}
            value={value}
            onChange={callbacks.onChange}
            onKeyDown={onKeyDown}
            placeholder='Type your text here or highlight part of the text in the document panel.'
          />
        </Transcript>
        <Cta onClick={callbacks.onGenerate} disabled={disabledGenerate}>
          Generate Speech
        </Cta>
        <Player>{renderSoundPlayer()}</Player>
      </Content>
      <Actions>
        <SavePanelContainer
          what='audio'
          verb='saveAudio'
          defaultValue='voice_1.mp3'
          autoProgress
          disabled={disabledSave}
        />
      </Actions>
    </Wrapper>
  );
}

export default Speech;
