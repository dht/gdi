import React from 'react';
import { Empty, Full, Star, Stars, Votes, Wrapper } from './Rating.style';
import { IArticleStats } from '../../../../types';

export type RatingProps = {
  stats?: IArticleStats;
};

export function Rating(props: RatingProps) {
  const { stats } = props;
  const { totalVotes, totalAverage } = stats;

  const style: React.CSSProperties = {
    width: `${totalAverage * 20}%`,
  };

  if (totalVotes === 0) {
    return null;
  }

  return (
    <Wrapper className='Rating-wrapper' data-testid='Rating-wrapper'>
      <Stars>
        <Empty>
          <Star className='material-symbols-outlined'>star</Star>
          <Star className='material-symbols-outlined'>star</Star>
          <Star className='material-symbols-outlined'>star</Star>
          <Star className='material-symbols-outlined'>star</Star>
          <Star className='material-symbols-outlined'>star</Star>
        </Empty>
        <Full style={style}>
          <Star className='material-symbols-outlined'>star</Star>
          <Star className='material-symbols-outlined'>star</Star>
          <Star className='material-symbols-outlined'>star</Star>
          <Star className='material-symbols-outlined'>star</Star>
          <Star className='material-symbols-outlined'>star</Star>
        </Full>
      </Stars>
      <Votes>{totalVotes} votes</Votes>
    </Wrapper>
  );
}

export default Rating;
