import React, { useEffect, useRef } from 'react';
import { useClickAway, useMount } from 'react-use';
import './Modal.scss';
import {
    Modal as ModalFluent,
    ContextualMenu,
    IDragOptions,
} from '@fluentui/react';
import { Header, Title, HeaderActions, Content, Wrapper } from './Modal.style';

export type ModalProps = {
    title?: string;
    children: JSX.Element[] | JSX.Element;
    open?: boolean;
    onClose: () => void;
    ariaLabel?: string;
    focusOnClassName?: string;
};

const dragOptions: IDragOptions = {
    moveMenuItemText: 'Move',
    closeMenuItemText: 'Close',
    menu: ContextualMenu,
    keepInBounds: true,
    dragHandleSelector: '.header',
};

export function Modal(props: ModalProps) {
    const { open = false, title, ariaLabel, focusOnClassName } = props;
    const ref = useRef<HTMLDivElement>(null);

    useMount(() => {
        if (!focusOnClassName) {
            return;
        }

        setTimeout(() => {
            if (!ref.current) {
                return;
            }

            const el: HTMLButtonElement | null =
                ref.current.querySelector(focusOnClassName);

            if (!el) {
                return;
            }

            el.focus();
        }, 50);
    });

    return (
        <ModalFluent
            titleAriaId={ariaLabel}
            isOpen={open}
            onDismiss={props.onClose}
            className='modal-root'
            styles={{
                scrollableContent: {
                    overflowY: 'visible',
                },
                main: {
                    border: '3px solid gold',
                },
            }}
            containerClassName='Modal-wrapper'
            dragOptions={dragOptions}
            isDarkOverlay={true}
            isBlocking={false}
        >
            <Wrapper ref={ref}>
                <Header className='header'>
                    <Title>{title}</Title>
                    <HeaderActions>
                        <i onClick={props.onClose} className='material-icons'>
                            close
                        </i>
                    </HeaderActions>
                </Header>
                <Content>{props.children}</Content>
            </Wrapper>
        </ModalFluent>
    );
}

export default Modal;
