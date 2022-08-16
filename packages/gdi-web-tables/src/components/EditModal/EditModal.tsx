import React from 'react';
import { Container } from './EditModal.style';

export type EditModalProps = {};

export function EditModal(_props: EditModalProps) {
    return (
        <Container className="EditModal-container" data-testid="EditModal-container">
            EditModal
        </Container>
    );
}

export default EditModal;
