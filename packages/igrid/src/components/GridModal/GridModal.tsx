import React from 'react';
import { Wrapper } from './GridModal.style';
import { isMobile } from '../../utils/mobile';
import MobileModal from '../_mobile/MobileModal/MobileModal';

export type GridModalProps = {
  children?: React.ReactNode;
};

export function GridModal(props: GridModalProps) {
  if (isMobile()) {
    return <MobileModal {...props} />;
  }

  return (
    <Wrapper className='GridModal-wrapper' data-testid='GridModal-wrapper'>
      {props.children}
    </Wrapper>
  );
}

export default GridModal;
