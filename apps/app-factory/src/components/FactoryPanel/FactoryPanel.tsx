import React from 'react';
import { Container } from './FactoryPanel.style';
import { PanelInspectorContainer } from '../../containers/panels/PanelInspectorContainer';
import { Accordion } from '@gdi/web-ui';
import { useTheme } from 'styled-components';

export type FactoryPanelProps = {};

export function FactoryPanel(_props: FactoryPanelProps) {
    const { isRtl } = useTheme();

    return (
        <Container
            className='FactoryPanel-container'
            data-testid='FactoryPanel-container'
        >
            <Accordion initialPanel='Inspector' isRtl={isRtl}>
                <PanelInspectorContainer key='Inspector' flex />
            </Accordion>
        </Container>
    );
}

export default FactoryPanel;
