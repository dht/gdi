import { useState } from 'react';
import { Json } from '../../types';
import { Cta, Explain, Noun, Title1, Title2, Versions, Wrapper } from './Hero.style';
import classnames from 'classnames';
import { useMount } from 'react-use';

export type HeroProps = {};

const nouns = ['AI', 'Thought', 'Light'];

export function Hero(_props: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useMount(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % nouns.length);
    }, 4000);

    return () => clearInterval(interval);
  });

  function renderNoun(noun: string, index: number) {
    const className = classnames({
      show: index === currentIndex,
    });

    return (
      <span key={noun} className={className}>
        {noun}
      </span>
    );
  }

  function renderNouns() {
    return nouns.map((noun: string, index) => renderNoun(noun, index));
  }

  const className = classnames('noun', `index-${currentIndex}`, {});

  return (
    <Wrapper className='Hero-wrapper' data-testid='Hero-wrapper'>
      <Title1>Work at the speed</Title1>
      <Title2>
        of
        <Noun className={className}>
          &nbsp;
          {renderNouns()}
        </Noun>
      </Title2>
      <Explain>
        GDI adds contextual UIs to your ChatGPT experience. <br /> It explores the power of
        interfaces built bottom-up for AI.
      </Explain>
      <Cta className='cta medium'>Start Here</Cta>
      <Versions>
        <span>v1.68.1</span>
        <a href='https://github.com/dht/gdi' target='_blank'>
          Github
        </a>
      </Versions>
    </Wrapper>
  );
}

export default Hero;
