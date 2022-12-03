import React from 'react';
import { Wrapper } from './AddModal.style';

export type AddModalProps = {};

export function AddModal(_props: AddModalProps) {
    return (
        <Wrapper className='AddModal-wrapper' data-testid='AddModal-wrapper'>
            AddModal
        </Wrapper>
    );
}

export default AddModal;
