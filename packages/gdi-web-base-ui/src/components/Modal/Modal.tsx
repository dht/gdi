import React, { useRef } from 'react';
import { useClickAway } from 'react-use';
import './Modal.scss';
import {
    Modal as ModalFluent,
    ContextualMenu,
    IDragOptions,
} from '@fluentui/react';
import {
    Header,
    Title,
    HeaderActions,
    Content,
    Container,
} from './Modal.style';

export type ModalProps = {
    title?: string;
    children: JSX.Element[] | JSX.Element;
    open?: boolean;
    onClose: () => void;
    ariaLabel?: string;
};

const dragOptions: IDragOptions = {
    moveMenuItemText: 'Move',
    closeMenuItemText: 'Close',
    menu: ContextualMenu,
    keepInBounds: true,
    dragHandleSelector: '.header',
};

export function ModalBase(props: ModalProps) {
    const { open = false, title, ariaLabel } = props;
    const ref = useRef(null);

    useClickAway(ref, () => {
        props.onClose();
    });

    return (
        <ModalFluent
            titleAriaId={ariaLabel}
            isOpen={open}
            onDismiss={props.onClose}
            isBlocking={false}
            className='modal-root'
            styles={{
                scrollableContent: {
                    overflowY: 'visible',
                },
                main: {
                    border: '3px solid purple',
                },
            }}
            containerClassName='modal-container'
            dragOptions={dragOptions}
            isDarkOverlay={true}
        >
            <Container>
                <Header className='header'>
                    <Title>{title}</Title>
                    <HeaderActions>
                        <i onClick={props.onClose} className='material-icons'>
                            close
                        </i>
                    </HeaderActions>
                </Header>
                <Content>{props.children}</Content>
            </Container>
        </ModalFluent>
    );
}

export default ModalBase;
