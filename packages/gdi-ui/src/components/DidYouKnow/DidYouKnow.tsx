import React from 'react';
import { Wrapper } from './DidYouKnow.style';
import Icon from '../Icon/Icon';

export type DidYouKnowProps = {
  children?: React.ReactNode;
};

export function DidYouKnow(props: DidYouKnowProps) {
  return (
    <Wrapper className='DidYouKnow-wrapper' data-testid='DidYouKnow-wrapper'>
      <Icon className='icon' name='question_mark' />
      {props.children}
    </Wrapper>
  );
}

export default DidYouKnow;
