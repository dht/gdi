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
    children: JSX.Element[];
};

export function MixerPanel(props: MixerPanelProps) {
    return (
        <Root
            className='MixerPanel-container'
            data-testid='MixerPanel-container'
        >
            <Accordion>
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
