import React from 'react';
import { Container } from './FactoryPanel.style';
import { PanelInspectorContainer } from '../../containers/panels/PanelInspectorContainer';
import { Accordion } from '@gdi/web-ui';

export type FactoryPanelProps = {};

export function FactoryPanel(_props: FactoryPanelProps) {
    return (
        <Container
            className='FactoryPanel-container'
            data-testid='FactoryPanel-container'
        >
            <Accordion initialPanel='Inspector'>
                <PanelInspectorContainer key='Inspector' flex />
            </Accordion>
        </Container>
    );
}

export default FactoryPanel;
