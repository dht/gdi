import React from 'react';
import { IWidget } from '@gdi/platformer';
import { MixerContainer } from '../containers/MixerContainer';
import { MixerPanelContainer } from '../containers/MixerPanelContainer';
import { ToolsContainer } from '../containers/ToolsContainer';
import { ViewsContainer } from '../containers/ViewsContainer';
import { PagesContainer } from '../containers/PagesContainer';
import { ImportExportContainer } from '../containers/ImportExportContainer';

export enum MixerWidgets {
    Mixer = 'mixer.Mixer',
    MixerPanel = 'mixer.MixerPanel',
    Tools = 'mixer.Tools',
    Views = 'mixer.Views',
    Pages = 'mixer.Pages',
    Code = 'mixer.Code',
    ImportExport = 'mixer.ImportExport',
}
export const widgets: IWidget[] = [
    {
        id: MixerWidgets.Mixer,
        name: 'Mixer',
        description: 'Mixer',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <MixerContainer {...props} />,
    },
    {
        id: MixerWidgets.MixerPanel,
        name: 'MixerPanel',
        description: 'MixerPanel',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <MixerPanelContainer {...props} />,
    },
    {
        id: MixerWidgets.Tools,
        name: 'Tools',
        description: 'Tools',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ToolsContainer {...props} />,
    },
    {
        id: MixerWidgets.Views,
        name: 'Views',
        description: 'Views',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ViewsContainer {...props} />,
    },
    {
        id: MixerWidgets.Pages,
        name: 'Pages',
        description: 'Pages',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <PagesContainer {...props} />,
    },
    {
        id: MixerWidgets.ImportExport,
        name: 'Site',
        description: 'ImportExport',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ImportExportContainer {...props} />,
    },
];
