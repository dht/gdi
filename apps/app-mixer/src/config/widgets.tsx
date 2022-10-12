import React from 'react';
import { CurrentIdsHoc, IWidget } from '@gdi/platformer';
import { MixerContainer } from '../containers/MixerContainer';
import { MixerPanel } from '../components/MixerPanel/MixerPanel';
import { ToolsContainer } from '../containers/singles/ToolsContainer';
import { PagesContainer } from '../containers/PagesContainer';
import { ImportExportContainer } from '../containers/singles/ImportExportContainer';
import { PageToolsContainer } from '../containers/singles/PageToolsContainer';
import { LibraryImagesContainer } from '../containers/LibraryImagesContainer';
import { PreviewContainer } from '../containers/PreviewContainer';
import { ModalImageUploadContainer } from '../containers/modals/ModalImageUploadContainer';
import { ModalPlayModeContainer } from '../containers/modals/ModalPlayModeContainer';
import { MixerTreeContainer } from '../containers/singles/MixerTreeContainer';
import { WindowSize } from '../components/WindowSize/WindowSize';
import { actions } from '../store';

export enum MixerWidgets {
    Mixer = 'mixer.Mixer',
    MixerPanel = 'mixer.MixerPanel',
    MixerTree = 'mixer.MixerTree',
    Pages = 'mixer.Pages',
    ImageGallery = 'mixer.ImageGallery',
    ImageUpload = 'mixer.ImageUpload',
    PlayMode = 'mixer.PlayMode',
    ImportExport = 'mixer.ImportExport',
    PageTools = 'mixer.PageTools',
    Preview = 'mixer.Preview',
    WindowSize = 'mixer.WindowSize',
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
        component: (props: any) =>
            CurrentIdsHoc(actions.currentIds.patch)(
                <MixerContainer {...props} />
            ),
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
        id: MixerWidgets.MixerTree,
        name: 'MixerTree',
        description: 'MixerTree',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <MixerTreeContainer {...props} />,
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
        id: MixerWidgets.PlayMode,
        name: 'PlayMode',
        description: 'PlayMode',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ModalPlayModeContainer {...props} />,
    },
    {
        id: MixerWidgets.WindowSize,
        name: 'WindowSize',
        description: 'WindowSize',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <WindowSize {...props} />,
    },
];
