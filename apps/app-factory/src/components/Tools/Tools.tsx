import React from 'react';
import { Container, KeyboardWrapper } from './Tools.style';
import { items } from './Tools.items';
import { Toolbar } from '@gdi/web-ui';
import KeyboardShortcuts from '../KeyboardShortcuts/KeyboardShortcuts';

export type ToolsProps = {
    onClick: (item: IOption) => void;
};

export function Tools(props: ToolsProps) {
    return (
        <Container className='Tools-container' data-testid='Tools-container'>
            <Toolbar horizontal items={items} onClick={props.onClick} />
            <KeyboardWrapper>
                <KeyboardShortcuts />
            </KeyboardWrapper>
        </Container>
    );
}

export default Tools;
