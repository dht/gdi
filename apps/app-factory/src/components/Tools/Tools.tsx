import React from 'react';
import { Wrapper, KeyboardWrapper } from './Tools.style';
import { items } from './Tools.items';
import { Toolbar } from '@gdi/web-ui';
import KeyboardShortcuts from '../KeyboardShortcuts/KeyboardShortcuts';

export type ToolsProps = {
    onClick: (item: IOption) => void;
};

export function Tools(props: ToolsProps) {
    return (
        <Wrapper className='Tools-wrapper' data-testid='Tools-wrapper'>
            <Toolbar horizontal items={items} onClick={props.onClick} />
            <KeyboardWrapper>
                <KeyboardShortcuts />
            </KeyboardWrapper>
        </Wrapper>
    );
}

export default Tools;
