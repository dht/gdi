import React from 'react';
import { Input, Wrapper } from './VisionInput.style';
import Icon from '../../../Icon/Icon';
import classnames from 'classnames';
import { VisionAddressBar } from './VisionInput.components';

export type VisionInputProps = {
  value: string;
  type: 'search' | 'address-bar';
};

export function VisionInput(props: VisionInputProps) {
  const { type } = props;

  if (type === 'address-bar') {
    return <VisionAddressBar {...props} />;
  }

  const className = classnames('VisionInput-wrapper', type, {});

  return (
    <Wrapper className={className} data-testid='VisionInput-wrapper'>
      <Icon name='search' />
      <Input placeholder='Search' />
    </Wrapper>
  );
}

export default VisionInput;
