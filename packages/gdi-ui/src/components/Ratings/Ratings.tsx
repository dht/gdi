import React from 'react';
import { Count, Wrapper } from './Ratings.style';
import Icon from '../Icon/Icon';
import classnames from 'classnames';
import { Star } from './Ratings.components';

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

    return <Count data-testid='Ratings-count'>({count})</Count>;
  }

  const className = classnames('Ratings-wrapper', {
    rated: count > 0,
  });

  return (
    <Wrapper className={className} data-testid='Ratings-wrapper'>
      {!value ? '-' : value.toFixed(1)}
      <Star />
      {renderCount()}
    </Wrapper>
  );
}

export default Ratings;
