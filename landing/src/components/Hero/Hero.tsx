import { useRef, useState } from 'react';
import { Json } from '../../types';
import { Comet, Cta, Explain, Noun, Title1, Title2, Versions, Wrapper } from './Hero.style';
import classnames from 'classnames';
import { useMount, useWindowScroll } from 'react-use';

export type HeroProps = {
  data: {
    title: string;
    explain1: string;
    explain2: string;
    cta: string;
  };
};

const nouns = ['AI', 'Thought', 'Light'];

export function Hero(props: HeroProps) {
  const { data } = props;
  const { title, explain1, explain2, cta } = data;
  const { y } = useWindowScroll();

  const hideComet = y > window.innerHeight * 0.5;

  const [currentIndex, setCurrentIndex] = useState(0);

  useMount(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % nouns.length);
    }, 4000);

    return () => clearInterval(interval);
  });

  function onCta() {
    document.location = '/';
  }

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
      <Title1>{title}</Title1>
      <Title2>
        of
        <Noun className={className}>
          &nbsp;
          {renderNouns()}
        </Noun>
      </Title2>
      <Explain>
        {explain1}
        <br />
        {explain2}
      </Explain>
      <Cta className='cta medium' onClick={onCta}>
        {cta}
      </Cta>
      <Versions>
        <span>v0.9.25</span>
        <a href='https://github.com/dht/gdi' target='_blank'>
          Github
        </a>
      </Versions>

      {!hideComet && (
        <Comet autoPlay loop playsInline muted>
          <source
            src='https://raw.githubusercontent.com/dht/gdi-assets/main/assets/videos/comet.webm'
            type='video/webm'
          />
        </Comet>
      )}
    </Wrapper>
  );
}

export default Hero;
