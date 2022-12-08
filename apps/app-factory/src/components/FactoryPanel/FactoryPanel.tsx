import React from 'react';
import { Wrapper } from './FactoryPanel.style';
import { PanelInspectorContainer } from '../../containers/panels/PanelInspectorContainer';
import { Accordion } from '@gdi/web-ui';
import { useTheme } from 'styled-components';

export type FactoryPanelProps = {};

export function FactoryPanel(_props: FactoryPanelProps) {
    const { isRtl } = useTheme() as any;

    return (
        <Wrapper
            className='FactoryPanel-wrapper'
            data-testid='FactoryPanel-wrapper'
        >
            <Accordion initialPanel='Inspector' isRtl={isRtl}>
                <PanelInspectorContainer key='Inspector' flex />
            </Accordion>
        </Wrapper>
    );
}

export default FactoryPanel;
