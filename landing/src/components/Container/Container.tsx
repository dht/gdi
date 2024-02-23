import React from 'react';
import { Wrapper } from './Container.style';
import classnames from 'classnames';

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container(props: ContainerProps) {
  const className = classnames('Container-wrapper', props.className, {});

  return (
    <Wrapper className={className} data-testid='Container-wrapper'>
      {props.children}
    </Wrapper>
  );
}

export default Container;
