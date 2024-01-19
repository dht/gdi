import React from 'react';
import { Gap, Wrapper } from './CostAndDuration.style';
import { get } from 'lodash';
import Cost from '../Cost/Cost';
import Duration from '../Duration/Duration';

export type CostAndDurationProps = {
  value: Json;
};

export function CostAndDuration(props: CostAndDurationProps) {
  const { value } = props;

  const duration = get(value, 'duration');
  const cost = get(value, 'cost.total');

  return (
    <Wrapper className='CostAndDuration-wrapper' data-testid='CostAndDuration-wrapper'>
      {duration && <Duration value={duration} />}
      <Gap />
      {cost && <Cost value={cost} />}
    </Wrapper>
  );
}

export default CostAndDuration;
