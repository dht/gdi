import React from 'react';
import { Wrapper } from './EditModal.style';

export type EditModalProps = {};

export function EditModal(_props: EditModalProps) {
    return (
        <Wrapper className='EditModal-wrapper' data-testid='EditModal-wrapper'>
            EditModal
        </Wrapper>
    );
}

export default EditModal;
