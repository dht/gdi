import MixerPanel from '../components/MixerPanel/MixerPanel';
import React, { Key, useMemo } from 'react';
import { PanelContentContainer } from './PanelContentContainer';
import { PanelInspectorContainer } from './PanelInspectorContainer';
import { PanelLibraryContainer } from './PanelLibraryContainer';
import { PanelLocaleContainer } from './PanelLocaleContainer';
import { PanelPackagesContainer } from './PanelPackagesContainer';
import { PanelPaletteContainer } from './PanelPaletteContainer';
import { PanelTypographyContainer } from './PanelTypographyContainer';
import { selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';

export const MixerPanelContainer = () => {
    const dispatch = useDispatch();

    const callbacks = useMemo(() => {
        return {};
    }, []);

    return (
        <MixerPanel>
            <PanelInspectorContainer key='Inspector' />
            <PanelLibraryContainer key='Library' flex />
            <PanelContentContainer key='Data' />
            <PanelTypographyContainer key='Typography' />
            <PanelPaletteContainer key='Palette' />
            <PanelLocaleContainer key='Locale' />
            <PanelPackagesContainer key='Packages' />
        </MixerPanel>
    );
};
