import React from 'react';
import { IWidget } from '@gdi/platformer';
import { MixerContainer } from '../containers/MixerContainer';
import { MixerPanel } from '../components/MixerPanel/MixerPanel';
import { ToolsContainer } from '../containers/singles/ToolsContainer';
import { ViewsContainer } from '../containers/singles/ViewsContainer';
import { PagesContainer } from '../containers/singles/PagesContainer';
import { ImportExportContainer } from '../containers/singles/ImportExportContainer';
import { LibraryImagesContainer } from '../containers/LibraryImagesContainer';
import { PreviewContainer } from '../containers/PreviewContainer';
import { KeyboardShortcutsContainer } from '../containers/singles/KeyboardShortcutsContainer';
import { ModalImageUploadContainer } from '../containers/modals/ModalImageUploadContainer';
import { ModalPlayModeContainer } from '../containers/modals/ModalPlayModeContainer';

export enum MixerWidgets {
    Mixer = 'mixer.Mixer',
    MixerPanel = 'mixer.MixerPanel',
    Tools = 'mixer.Tools',
    Views = 'mixer.Views',
    Pages = 'mixer.Pages',
    ImageGallery = 'mixer.ImageGallery',
    ImageUpload = 'mixer.ImageUpload',
    PlayMode = 'mixer.PlayMode',
    ImportExport = 'mixer.ImportExport',
    Preview = 'mixer.Preview',
    KeyboardShortcuts = 'mixer.KeyboardShortcuts',
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
        component: (props: any) => <MixerPanel {...props} />,
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
    {
        id: MixerWidgets.ImageGallery,
        name: 'ImageGallery',
        description: 'ImageGallery',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <LibraryImagesContainer {...props} />,
    },
    {
        id: MixerWidgets.ImageUpload,
        name: 'ImageUpload',
        description: 'ImageUpload',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ModalImageUploadContainer {...props} />,
    },
    {
        id: MixerWidgets.Preview,
        name: 'Preview',
        description: 'Preview',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <PreviewContainer {...props} />,
    },
    {
        id: MixerWidgets.KeyboardShortcuts,
        name: 'KeyboardShortcuts',
        description: 'KeyboardShortcuts',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <KeyboardShortcutsContainer {...props} />,
    },
    {
        id: MixerWidgets.PlayMode,
        name: 'PlayMode',
        description: 'PlayMode',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ModalPlayModeContainer {...props} />,
    },
];
