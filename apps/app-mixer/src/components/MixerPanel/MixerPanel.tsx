import React from 'react';
import { Container as Root } from './MixerPanel.style';
import { Accordion } from '@gdi/web-ui';

export type MixerPanelProps = {
    children: JSX.Element[];
};

export function MixerPanel(props: MixerPanelProps) {
    return (
        <Root
            className='MixerPanel-container'
            data-testid='MixerPanel-container'
        >
            <Accordion>{props.children}</Accordion>
        </Root>
    );
}

export default MixerPanel;
