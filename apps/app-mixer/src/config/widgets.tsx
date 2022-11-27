import React from 'react';
import { actions } from '../store';
import { APP_ID } from './ids';
import { IWidget, Wrapper } from '@gdi/platformer';

const ZoomBuildContainer = React.lazy(() => import('../containers/ZoomBuildContainer')); // prettier-ignore
const DatasetsContainer = React.lazy(() => import('../containers/DatasetsContainer')); // prettier-ignore
const GalleryImagesContainer = React.lazy(() => import('../containers/GalleryImagesContainer')); // prettier-ignore
const GalleryWidgetsContainer = React.lazy(() => import('../containers/GalleryWidgetsContainer')); // prettier-ignore
const MixerContainer = React.lazy(() => import('../containers/MixerContainer')); // prettier-ignore
const MixerPanelContainer = React.lazy(() => import('../containers/MixerPanelContainer')); // prettier-ignore
const MixerTreeContainer = React.lazy(() => import('../containers/singles/MixerTreeContainer')); // prettier-ignore
const ModalImageUploadContainer = React.lazy(() => import('../containers/modals/ModalImageUploadContainer')); // prettier-ignore
const ModalAdhocLogsContainer = React.lazy(() => import('../containers/modals/ModalAdhocLogsContainer')); // prettier-ignore
const ModalPlayModeContainer = React.lazy(() => import('../containers/modals/ModalPlayModeContainer')); // prettier-ignore
const PagesContainer = React.lazy(() => import('../containers/PagesContainer')); // prettier-ignore
const PreviewContainer = React.lazy(() => import('../containers/PreviewContainer')); // prettier-ignore
const WindowSize = React.lazy(() => import('../components/WindowSize/WindowSize')); // prettier-ignore

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
    AdhocLogs = 'mixer.AdhocLogs',
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
    {
        id: MixerWidgets.AdhocLogs,
        name: 'AdhocLogs',
        description: 'AdhocLogs',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ModalAdhocLogsContainer}
                props={props}
            />
        ),
    },
];
