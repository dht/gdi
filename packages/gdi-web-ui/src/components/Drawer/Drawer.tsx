import React from 'react';
import { Container } from './Drawer.style';
import { Drawer as DrawerBase } from '@gdi/web-base-ui';

export type DrawerProps = {
    title?: string;
    open?: boolean;
    children: JSX.Element[] | JSX.Element | null;
    onClose: () => void;
};

export function Drawer(props: DrawerProps) {
    const { open = true, title = '' } = props;

    return (
        <DrawerBase title={title} open={open} onClose={props.onClose}>
            <Container
                className='Modal-container'
                data-testid='Modal-container'
            >
                {props.children}
            </Container>
        </DrawerBase>
    );
}

export default Drawer;
