import React from 'react';
import { Container } from './AddModal.style';

export type AddModalProps = {};

export function AddModal(_props: AddModalProps) {
    return (
        <Container className="AddModal-container" data-testid="AddModal-container">
            AddModal
        </Container>
    );
}

export default AddModal;
