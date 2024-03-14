import React from 'react';
import { Wrapper } from './Stats.style';
import { Json } from '../../types';

export type StatsProps = {
  stats: Json;
};

export function Stats(props: StatsProps) {
  const { stats } = props;
  const { total } = stats;

  return (
    <Wrapper className='Stats-wrapper' data-testid='Stats-wrapper'>
      {total.toLocaleString()} items
    </Wrapper>
  );
}

export default Stats;
