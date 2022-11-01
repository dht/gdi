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
import { useLanguage } from '@gdi/language';
import { useTheme } from 'styled-components';

export type MixerPanelProps = {
    onHeaderAction: (panelKey: string, actionId: string) => void;
};

export function MixerPanel(props: MixerPanelProps) {
    const { t } = useLanguage();
    const { isRtl } = useTheme() as any;

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
                <PanelLocaleContainer //
                    key='Locale'
                    title={t('Locale')}
                />
                <PanelPackagesContainer //
                    key='Packages'
                    title={t('Packages')}
                />
            </Accordion>
        </Root>
    );
}

export default MixerPanel;
