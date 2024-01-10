import React from 'react';
import { Content, Letter, Speaker, Wrapper } from './TranscriptLine.style';
import classnames from 'classnames';
import { ISpeaker } from '../../Transcript.types';
import Karaoke from '../Karaoke/Karaoke';

export type TranscriptLineProps = {
  speaker: ISpeaker;
  text: string;
  duration?: number;
  className?: string;
};

export function TranscriptLine(props: TranscriptLineProps) {
  const { speaker, text, duration } = props;

  const speakerName = speaker.name;

  const className = classnames('TranscriptLine-wrapper', props.className);

  const classNameLetter = classnames('speaker-' + speaker.id, props.className);
  const firstLetter = speakerName[0];
  const rest = speakerName.slice(1);

  function renderContent() {
    if (props.className === 'current') {
      return <Karaoke duration={duration} content={text} />;
    }

    return <Content>{text}</Content>;
  }

  return (
    <Wrapper className={className} data-testid='TranscriptLine-wrapper'>
      <Letter className={classNameLetter}>{firstLetter}</Letter>
      <Speaker className={classNameLetter}>{rest}</Speaker>
      {renderContent()}
    </Wrapper>
  );
}

export default TranscriptLine;
