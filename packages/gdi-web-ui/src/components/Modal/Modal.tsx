import React from 'react';
import { Container } from './Modal.style';
import { ModalBase } from '@gdi/web-base-ui';

export type ModalProps = {
    title?: string;
    open?: boolean;
    children: JSX.Element[] | JSX.Element | null;
    onClose: () => void;
    ariaLabel?: string;
};

export function Modal(props: ModalProps) {
    const { open, title, ariaLabel } = props;

    return (
        <ModalBase
            ariaLabel={ariaLabel}
            title={title}
            open={open}
            onClose={props.onClose}
        >
            <Container
                className='Modal-container'
                data-testid='Modal-container'
            >
                {props.children}
            </Container>
        </ModalBase>
    );
}

export default Modal;
