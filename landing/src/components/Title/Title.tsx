import React from 'react';
import { Wrapper } from './Title.style';
import classnames from 'classnames';

export type TitleProps = {
  value: string;
  className?: string;
};

export function Title(props: TitleProps) {
  const { value = '' } = props;

  const className = classnames('Title-wrapper', props.className, {});

  function renderTitle() {
    const parts = value.split('*');

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <span key={index}>{part}</span>;
      }

      return part;
    });
  }

  return (
    <Wrapper className={className} data-testid='Title-wrapper'>
      {renderTitle()}
    </Wrapper>
  );
}

export default Title;
