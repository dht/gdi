import React from 'react';
import { Wrapper } from './Ratings.style';
import Icon from '../Icon/Icon';

export type RatingsProps = {
  value: number;
  count?: number;
};

export function Ratings(props: RatingsProps) {
  const { value = 0, count = 0 } = props;

  function renderCount() {
    if (!count) {
      return null;
    }

    return <span data-testid='Ratings-count'>({count})</span>;
  }

  return (
    <Wrapper className='Ratings-wrapper' data-testid='Ratings-wrapper'>
      {!value ? '-' : value.toFixed(2)}
      <Icon name='Star' size={15} />
      {renderCount()}
    </Wrapper>
  );
}

export default Ratings;
