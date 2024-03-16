import React from 'react';
import { Item, Wrapper } from './Weeks.style';
import { Json } from '../../../../types';
import classnames from 'classnames';
import { getCurrentWeek } from '../../../../utils/date';

export type WeeksProps = {
  data: Json[];
  value: number;
  onChange: (value: number) => void;
};

export function Weeks(props: WeeksProps) {
  const { value, data } = props;

  function renderWeek(week: Json) {
    const { name } = week;

    const className = classnames('week', {
      selected: value === week.id,
      current: week.id === String(getCurrentWeek()),
    });

    return (
      <Item key={week.id} className={className} onClick={() => props.onChange(week.id)}>
        {name}
      </Item>
    );
  }

  function renderWeeks() {
    return data.map((week: Json) => renderWeek(week));
  }

  return (
    <Wrapper className='Weeks-wrapper' data-testid='Weeks-wrapper'>
      {renderWeeks()}
    </Wrapper>
  );
}

export default Weeks;
