import { useMemo } from 'react';
import { useLocalStorage } from 'react-use';
import { Wrapper } from './Duration.style';

export type DurationProps = {
  value: number;
};

export function Duration(props: DurationProps) {
  const { value } = props;
  const [units, setUnits] = useLocalStorage('DURATION_UNITS', 'seconds');

  function onClick() {
    setUnits(units === 'seconds' ? 'millis' : 'seconds');
  }

  const valueText = useMemo(() => {
    if (units === 'seconds') {
      return `${(value / 1000).toFixed(2)}s`;
    } else {
      return `${Math.round(value).toLocaleString()}ms`;
    }
  }, [value, units]);

  return (
    <Wrapper className='Duration-wrapper' data-testid='Duration-wrapper' onClick={onClick}>
      {valueText}
    </Wrapper>
  );
}

export default Duration;
