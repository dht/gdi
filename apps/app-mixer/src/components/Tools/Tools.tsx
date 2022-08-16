import React from 'react';
import { Container } from './Tools.style';
import { items } from './Tools.items';
import { Toolbar } from '@gdi/web-ui';

export type ToolsProps = {
    selectedItemId?: string;
    onClick: (item: IToolbarItem) => void;
};

export function Tools(props: ToolsProps) {
    const { selectedItemId } = props;

    return (
        <Container className='Tools-container' data-testid='Tools-container'>
            <Toolbar
                items={items}
                onClick={props.onClick}
                selectedItemId={selectedItemId}
            />
        </Container>
    );
}

export default Tools;
