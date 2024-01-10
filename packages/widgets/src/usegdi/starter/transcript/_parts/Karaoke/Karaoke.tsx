import React from 'react';
import { Wrapper } from './Karaoke.style';
import { useKaraoke } from './Karaoke.hooks';

export type KaraokeProps = {
  content: string;
  duration?: number;
};

export function Karaoke(props: KaraokeProps) {
  const { content = '', duration } = props;

  const [colorful, rest] = useKaraoke(content, duration);

  return (
    <Wrapper className='Karaoke-wrapper' data-testid='Karaoke-wrapper'>
      <span className='colorful'>{colorful}</span>
      <span className='white'>{rest}</span>
    </Wrapper>
  );
}

export default Karaoke;
