import React from 'react';
import { Container as Root } from './MixerPanel.style';
import { Accordion } from '@gdi/web-ui';
import { PanelContentContainer } from '../../containers/panels/PanelContentContainer';
import { PanelInspectorContainer } from '../../containers/panels/PanelInspectorContainer';
import { PanelLibraryContainer } from '../../containers/panels/PanelLibraryContainer';
import { PanelLocaleContainer } from '../../containers/panels/PanelLocaleContainer';
import { PanelPackagesContainer } from '../../containers/panels/PanelPackagesContainer';
import { PanelPaletteContainer } from '../../containers/panels/PanelPaletteContainer';
import { PanelTypographyContainer } from '../../containers/panels/PanelTypographyContainer';

export type MixerPanelProps = {
    onHeaderAction: (panelKey: string, actionId: string) => void;
};

export function MixerPanel(props: MixerPanelProps) {
    function getHeaderActions(key: string) {
        switch (key) {
            case 'Library':
                return [
                    {
                        id: 'view',
                        iconName: 'View',
                    },
                ];
            default:
                return [];
        }
    }

    return (
        <Root
            className='MixerPanel-container'
            data-testid='MixerPanel-container'
        >
            <Accordion
                initialPanel='Library'
                getHeaderActions={getHeaderActions}
                onHeaderAction={props.onHeaderAction}
            >
                <PanelInspectorContainer key='Inspector' flex />
                <PanelLibraryContainer key='Library' flex />
                <PanelContentContainer key='Data' flex />
                <PanelTypographyContainer key='Typography' />
                <PanelPaletteContainer key='Palette' />
                <PanelLocaleContainer key='Locale' />
                <PanelPackagesContainer key='Packages' />
            </Accordion>
        </Root>
    );
}

export default MixerPanel;
