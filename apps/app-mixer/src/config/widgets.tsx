import React from 'react';

import { ZoomBuildContainer } from '../containers/ZoomBuildContainer';
import { actions } from '../store';
import { APP_ID } from './ids';
import { DatasetsContainer } from '../containers/DatasetsContainer';
import { GalleryImagesContainer } from '../containers/GalleryImagesContainer';
import { GalleryWidgetsContainer } from '../containers/GalleryWidgetsContainer';
import { IWidget, Wrapper } from '@gdi/platformer';
import { MixerContainer } from '../containers/MixerContainer';
import { MixerPanelContainer } from '../containers/MixerPanelContainer';
import { MixerTreeContainer } from '../containers/singles/MixerTreeContainer';
import { ModalImageUploadContainer } from '../containers/modals/ModalImageUploadContainer';
import { ModalPlayModeContainer } from '../containers/modals/ModalPlayModeContainer';
import { PagesContainer } from '../containers/PagesContainer';
import { PreviewContainer } from '../containers/PreviewContainer';
import { WindowSize } from '../components/WindowSize/WindowSize';

export enum MixerWidgets {
    ZoomBuild = 'mixer.ZoomBuild',
    Mixer = 'mixer.Mixer',
    MixerPanel = 'mixer.MixerPanel',
    MixerTree = 'mixer.MixerTree',
    Pages = 'mixer.Pages',
    ImageGallery = 'mixer.ImageGallery',
    ImageUpload = 'mixer.ImageUpload',
    WidgetGallery = 'mixer.WidgetGallery',
    PlayMode = 'mixer.PlayMode',
    ImportExport = 'mixer.ImportExport',
    PageTools = 'mixer.PageTools',
    Preview = 'mixer.Preview',
    Datasets = 'mixer.Datasets',
    WindowSize = 'mixer.WindowSize',
}
export const widgets: IWidget[] = [
    {
        id: MixerWidgets.ZoomBuild,
        name: 'ZoomBuild',
        description: 'ZoomBuild',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ZoomBuildContainer}
                props={props}
                currentIdsActionCreator={actions.currentIds.patch}
            />
        ),
    },
    {
        id: MixerWidgets.Mixer,
        name: 'Mixer',
        description: 'Mixer',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={MixerContainer}
                props={props}
                currentIdsActionCreator={actions.currentIds.patch}
            />
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
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={MixerPanelContainer}
                props={props}
            />
        ),
    },
    {
        id: MixerWidgets.MixerTree,
        name: 'MixerTree',
        description: 'MixerTree',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={MixerTreeContainer}
                props={props}
            />
        ),
    },
    {
        id: MixerWidgets.Pages,
        name: 'Pages',
        description: 'Pages',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={PagesContainer} props={props} />
        ),
    },
    {
        id: MixerWidgets.ImageGallery,
        name: 'ImageGallery',
        description: 'ImageGallery',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={GalleryImagesContainer}
                props={props}
            />
        ),
    },
    {
        id: MixerWidgets.WidgetGallery,
        name: 'WidgetGallery',
        description: 'WidgetGallery',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={GalleryWidgetsContainer}
                props={props}
            />
        ),
    },
    {
        id: MixerWidgets.ImageUpload,
        name: 'ImageUpload',
        description: 'ImageUpload',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ModalImageUploadContainer}
                props={props}
            />
        ),
    },
    {
        id: MixerWidgets.Preview,
        name: 'Preview',
        description: 'Preview',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={PreviewContainer}
                props={props}
            />
        ),
    },
    {
        id: MixerWidgets.PlayMode,
        name: 'PlayMode',
        description: 'PlayMode',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ModalPlayModeContainer}
                props={props}
            />
        ),
    },
    {
        id: MixerWidgets.WindowSize,
        name: 'WindowSize',
        description: 'WindowSize',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={WindowSize} props={props} />
        ),
    },
    {
        id: MixerWidgets.Datasets,
        name: 'Datasets',
        description: 'Datasets',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={DatasetsContainer}
                props={props}
            />
        ),
    },
];
