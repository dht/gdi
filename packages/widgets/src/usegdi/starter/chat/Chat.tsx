import { useEffect, useRef } from 'react';
import { useMeasure } from 'react-use';
import { Gap, Lines, Wrapper } from './Chat.style';
import { ISentence, ISpeaker } from './Chat.types';
import { ChatLine } from './_parts/ChatLine/ChatLine';

export type ChatProps = {
  sentences: ISentence[];
  speakers: Record<string, ISpeaker>;
  currentIndex: number;
};

export function Chat(props: ChatProps) {
  const { sentences = [], speakers, currentIndex } = props;
  const [ref, { height }] = useMeasure<HTMLDivElement>();
  const refLines = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!refLines.current) {
      return;
    }

    // scroll to bottom animated
    const scrollHeight = refLines.current.scrollHeight;

    refLines.current.scrollTo({
      behavior: 'smooth',
      top: scrollHeight,
    });
  }, [sentences.length]);

  function renderLine(item: Json, index: number) {
    const speaker = speakers[item.speakerName];

    return <ChatLine key={item.id} speaker={speaker} text={item.text} duration={item.duration} />;
  }

  function renderLines() {
    return sentences.map((item: Json, index: number) => renderLine(item, index));
  }

  const style = {
    height: height + 'px',
  };

  return (
    <Wrapper ref={ref} className='Transcript-wrapper' data-testid='Transcript-wrapper'>
      <Lines ref={refLines} style={style}>
        {renderLines()}
        <Gap />
      </Lines>
    </Wrapper>
  );
}

export default Chat;
