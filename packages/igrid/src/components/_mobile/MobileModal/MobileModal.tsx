import React from 'react';
import { Wrapper } from './MobileModal.style';

export type MobileModalProps = {
  children?: React.ReactNode;
};

export function MobileModal(props: MobileModalProps) {
  return (
    <Wrapper className='MobileModal-wrapper' data-testid='MobileModal-wrapper'>
      {props.children}
    </Wrapper>
  );
}

export default MobileModal;
