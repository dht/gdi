import * as React from 'react';
import {
    Header,
    Title,
    HeaderActions,
    Content,
    Container,
} from './Drawer.style';
import { Panel, PanelType } from '@fluentui/react';
import './Drawer.scss';

export type DrawerProps = {
    open: boolean;
    title: string;
    children?: JSX.Element | JSX.Element[];
    onClose: () => void;
};

export function Drawer(props: DrawerProps) {
    const { open, title } = props;

    return (
        <Panel
            headerText={title}
            isOpen={open}
            onDismiss={props.onClose}
            closeButtonAriaLabel='Close'
            isLightDismiss={true}
            className='base-drawer'
            headerClassName='base-drawer-header'
            isBlocking={true}
            type={PanelType.largeFixed}
        >
            <Container>
                <Header>
                    <Title>{title}</Title>
                    <HeaderActions></HeaderActions>
                </Header>
                <Content>{props.children}</Content>
            </Container>
        </Panel>
    );
}

export default Drawer;
