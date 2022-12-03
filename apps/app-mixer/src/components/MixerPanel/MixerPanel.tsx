import React from 'react';
import { Wrapper as Root } from './MixerPanel.style';
import { Accordion } from '@gdi/web-ui';
import { PanelContentContainer } from '../../containers/panels/PanelContentContainer';
import { PanelInspectorContainer } from '../../containers/panels/PanelInspectorContainer';
import { PanelLibraryContainer } from '../../containers/panels/PanelLibraryContainer';
import { PanelLocaleContainer } from '../../containers/panels/PanelLocaleContainer';
import { PanelPackagesContainer } from '../../containers/panels/PanelPackagesContainer';
import { PanelPaletteContainer } from '../../containers/panels/PanelPaletteContainer';
import { PanelTypographyContainer } from '../../containers/panels/PanelTypographyContainer';
import { useLanguage } from '@gdi/language';
import { useTheme } from 'styled-components';
import { LibrarySelector } from '@gdi/web-ui';

export type MixerPanelProps = {
    panelLibraryFlavour: string;
    callbacks: {
        onLibraryChange: (optionId: string) => void;
    };
};

export function MixerPanel(props: MixerPanelProps) {
    const { panelLibraryFlavour, callbacks } = props;
    const { t } = useLanguage();
    const { isRtl } = useTheme() as any;

    function renderActions(panelKey: string) {
        switch (panelKey) {
            case 'Library':
                return (
                    <LibrarySelector
                        value={panelLibraryFlavour}
                        onChange={callbacks.onLibraryChange}
                    />
                );
            default:
                return [];
        }
    }

    return (
        <Root className='MixerPanel-wrapper' data-testid='MixerPanel-wrapper'>
            <Accordion
                initialPanel='Library'
                renderActions={renderActions}
                isRtl={isRtl}
            >
                <PanelInspectorContainer
                    key='Inspector'
                    title={t('Inspector')}
                    flex
                />
                <PanelLibraryContainer
                    key='Library'
                    title={t('Library')}
                    flex
                />
                <PanelContentContainer //
                    key='Data'
                    title={t('Data')}
                    flex
                />
                <PanelTypographyContainer
                    key='Typography'
                    title={t('Typography')}
                />
                <PanelPaletteContainer //
                    key='Palette'
                    title={t('Palette')}
                />
            </Accordion>
        </Root>
    );
}

export default MixerPanel;
