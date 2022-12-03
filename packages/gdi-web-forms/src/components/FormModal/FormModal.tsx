import React from 'react';
import { Modal } from '@gdi/web-base-ui';
import Form from '../Form/Form';
import { Wrapper } from './FormModal.style';

export type FormModalProps = IFormProps & {
    title?: string;
    onClose: () => void;
};

export function FormModal(props: FormModalProps) {
    const { title = '' } = props;

    return (
        <Modal title={title} onClose={props.onClose} open={true}>
            <Wrapper
                className='FormModal-wrapper'
                data-testid='FormModal-wrapper'
            >
                <Form {...props} />
            </Wrapper>
        </Modal>
    );
}

export default FormModal;
