import { useEffect } from 'react';
import useCountdown from './Countdown.hooks';
import { Wrapper } from './Countdown.style';

export type CountdownProps = {
  message: string;
  seconds: number;
  onTimeout: () => void;
};

export function Countdown(props: CountdownProps) {
  const { message, seconds } = props;
  const secondsLeft = useCountdown(seconds);

  useEffect(() => {
    if (secondsLeft === 0) {
      props.onTimeout();
    }
  }, [secondsLeft]);

  return (
    <Wrapper className='Countdown-wrapper' data-testid='Countdown-wrapper'>
      {message} in {secondsLeft} seconds.
    </Wrapper>
  );
}

export default Countdown;
