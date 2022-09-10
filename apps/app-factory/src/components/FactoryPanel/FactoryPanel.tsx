import React from 'react';
import { Container } from './FactoryPanel.style';
import { PanelContentContainer } from '../../containers/panels/PanelContentContainer';
import { PanelInspectorContainer } from '../../containers/panels/PanelInspectorContainer';
import { PanelLibraryContainer } from '../../containers/panels/PanelLibraryContainer';
import { Accordion } from '@gdi/web-ui';

export type FactoryPanelProps = {};

export function FactoryPanel(_props: FactoryPanelProps) {
    return (
        <Container
            className='FactoryPanel-container'
            data-testid='FactoryPanel-container'
        >
            <Accordion>
                <PanelInspectorContainer key='Inspector' flex />
                <PanelLibraryContainer key='Library' flex />
                <PanelContentContainer key='Data' flex />
            </Accordion>
        </Container>
    );
}

export default FactoryPanel;
