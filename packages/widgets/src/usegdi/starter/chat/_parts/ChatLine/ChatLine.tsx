import classnames from 'classnames';
import { ISpeaker } from '../../Chat.types';
import { Content, Letter, Speaker, Wrapper } from './ChatLine.style';
import { Markdown } from '@gdi/ui';

export type ChatLineProps = {
  speaker: ISpeaker;
  text: string;
  duration?: number;
  className?: string;
};

export function ChatLine(props: ChatLineProps) {
  const { speaker, text, duration } = props;

  const speakerName = speaker.name;

  const className = classnames('ChatLine-wrapper', props.className);

  const classNameLetter = classnames('speaker-' + speaker.id, props.className);
  const firstLetter = speakerName[0];
  const rest = speakerName.slice(1);

  function renderContent() {
    return <Markdown mode='dark' markdown={text} />;
  }

  return (
    <Wrapper className={className} data-testid='ChatLine-wrapper'>
      <Letter className={classNameLetter}>{firstLetter}</Letter>
      <Speaker className={classNameLetter}>{rest}</Speaker>
      {renderContent()}
    </Wrapper>
  );
}

export default ChatLine;
