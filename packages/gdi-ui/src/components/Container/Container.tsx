import React from 'react';
import { Wrapper, H1 } from './Container.style';
import classnames from 'classnames';

export type ContainerProps = {
  header?: string;
  className?: string;
  children: React.ReactNode;
};

export function Container(props: ContainerProps) {
  const { header } = props;

  const className = classnames('Container-wrapper', props.className, {});

  function renderHeader() {
    if (!header) {
      return null;
    }

    return <H1>{header}</H1>;
  }

  return (
    <Wrapper className={className} data-testid='Container-wrapper'>
      {renderHeader()}
      {props.children}
    </Wrapper>
  );
}

export default Container;
