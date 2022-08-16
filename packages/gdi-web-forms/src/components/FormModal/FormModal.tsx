import React from 'react';
import { Modal } from '@gdi/web-base-ui';
import Form, { FormProps } from '../Form/Form';
import { Container } from './FormModal.style';

export type FormModalProps = FormProps & {
    title?: string;
    onClose: () => void;
};

export function FormModal(props: FormModalProps) {
    const { title = '' } = props;

    return (
        <Modal title={title} onClose={props.onClose} open={true}>
            <Container
                className='FormModal-container'
                data-testid='FormModal-container'
            >
                <Form {...props} />
            </Container>
        </Modal>
    );
}

export default FormModal;
