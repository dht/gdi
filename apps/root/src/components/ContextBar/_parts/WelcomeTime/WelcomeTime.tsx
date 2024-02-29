import { format, useTime } from '@gdi/ui';
import { Column, DateText, Day, Time, Wrapper } from './WelcomeTime.style';

export type WelcomeTimeProps = {
  is24Hours: boolean;
};

const now = Date.now();
const day = format.date.day(now);
const dateText = format.date.normal(now);

export function WelcomeTime(props: WelcomeTimeProps) {
  const { is24Hours } = props;
  const currentTime = useTime(is24Hours);

  return (
    <Wrapper className='WelcomeTime-wrapper' data-testid='WelcomeTime-wrapper'>
      <Time>{currentTime}</Time>
      <Column>
        <Day>{day}</Day>
        <DateText>{dateText}</DateText>
      </Column>
    </Wrapper>
  );
}

export default WelcomeTime;
