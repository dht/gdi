import React from 'react';
import { Input, Wrapper } from './VisionInput.style';
import Icon from '../../../Icon/Icon';
import classnames from 'classnames';
import { VisionInputProps } from './VisionInput';

export function VisionAddressBar(props: VisionInputProps) {
  const { value, type } = props;

  const className = classnames('VisionInput-wrapper', type, {});

  return (
    <Wrapper className={className} data-testid='VisionInput-wrapper'>
      <Icon name='mic' />
      <Icon name='lock' />
      <Input placeholder={value} />
      <Icon name='landscape' />
      <Icon name='refresh' />
    </Wrapper>
  );
}
