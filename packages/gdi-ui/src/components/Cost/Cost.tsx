import React, { useMemo } from 'react';
import { Wrapper } from './Cost.style';
import { useLocalStorage } from 'react-use';

export type CostProps = {
  value: number;
};

export function Cost(props: CostProps) {
  const { value } = props;
  const [units, setUnits] = useLocalStorage('COST_UNITS', 'dollars');

  function onClick() {
    setUnits(units === 'dollars' ? 'cents' : 'dollars');
  }

  const valueText = useMemo(() => {
    if (units === 'dollars') {
      return `$${value.toFixed(3)}`;
    } else {
      return `${(value * 100).toFixed(2)}¢`;
    }
  }, [value, units]);

  return (
    <Wrapper className='Cost-wrapper' data-testid='Cost-wrapper' onClick={onClick}>
      {valueText}
    </Wrapper>
  );
}

export default Cost;
