import classnames from 'classnames';
import { useMeasure } from 'react-use';
import { Lines, Wrapper } from './Transcript.style';
import { ISentence, ISpeaker } from './Transcript.types';
import { TranscriptLine } from './_parts/TranscriptLine/TranscriptLine';
import { useEffect, useRef } from 'react';

export type TranscriptProps = {
  sentences: ISentence[];
  speakers: Record<string, ISpeaker>;
  currentIndex: number;
};

export function Transcript(props: TranscriptProps) {
  const { sentences, speakers, currentIndex } = props;
  const [ref, { height }] = useMeasure<HTMLDivElement>();
  const refLines = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!refLines.current) {
      return;
    }

    refLines.current.querySelector('.current')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [currentIndex]);

  function renderLine(item: Json, index: number) {
    const speaker = speakers[item.speakerName];

    const className = classnames({
      past: index < currentIndex,
      current: index === currentIndex,
      future: index > currentIndex,
    });

    return (
      <TranscriptLine
        key={item.id}
        className={className}
        speaker={speaker}
        text={item.text}
        duration={item.duration}
      />
    );
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
      </Lines>
    </Wrapper>
  );
}

export default Transcript;
