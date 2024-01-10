import React, { useMemo } from 'react';
import { Wrapper } from './Timestamp.style';
import classnames from 'classnames';

export type TimestampProps = {
  value: number;
  color?: string;
};

export function Timestamp(props: TimestampProps) {
  const { value } = props;

  const formattedValue = useMemo(() => {
    let output = (value / 1000).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return output;
  }, [value]);

  const className = classnames('Timestamp-wrapper', props.color);

  return (
    <Wrapper className={className} data-testid='Timestamp-wrapper'>
      {formattedValue}s
    </Wrapper>
  );
}

export default Timestamp;
