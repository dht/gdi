import React from 'react';
import { Wrapper } from './VisionIcon.style';
import Icon from '../../../Icon/Icon';
import classnames from 'classnames';

export type VisionIconProps = {
  icon: string;
};

export function VisionIcon(props: VisionIconProps) {
  const { icon } = props;

  const className = classnames('VisionIcon-wrapper', icon, {});

  const size = icon === 'add' ? 22 : 20;

  return (
    <Wrapper className={className} data-testid='VisionIcon-wrapper'>
      <Icon size={size} name={icon} />
    </Wrapper>
  );
}

export default VisionIcon;
