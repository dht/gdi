import React from 'react';
import { Wrapper } from './Ok.style';
import Icon from '../Icon/Icon';

export type OkProps = {
  value: boolean;
};

export function Ok(props: OkProps) {
  const { value } = props;

  const iconName = value ? 'check' : 'close';

  return (
    <Wrapper className='Ok-wrapper' data-testid='Ok-wrapper'>
      <Icon name={iconName} />
    </Wrapper>
  );
}

export default Ok;
