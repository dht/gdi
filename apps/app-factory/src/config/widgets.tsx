import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { FactoryPanel } from '../components/FactoryPanel/FactoryPanel';
import { ImportExportLayoutContainer } from '../containers/singles/ImportExportLayoutContainer';
import { DesignerTreeContainer } from '../containers/singles/DesignerTreeContainer';
import { ModalFlexPropertiesContainer } from '../containers/modals/ModalFlexPropertiesContainer';
import { LayoutsContainer } from '../containers/LayoutsContainer';
import { LayoutContainer } from '../containers/LayoutContainer';
import { ArticleEditorContainer } from '../containers/ArticleEditorContainer';
import { ArticlesContainer } from '../containers/ArticlesContainer';
import { actions } from '../store';
import { APP_ID } from './ids';

export enum FactoryWidgets {
    FactoryPanel = 'factory.FactoryPanel',
    ImportExportLayouts = 'factory.ImportExportLayouts',
    DesignerTree = 'factory.DesignerTree',
    Layouts = 'factory.Layouts',
    Layout = 'factory.Layout',
    Properties = 'factory.Properties',
    ArticleEditor = 'factory.ArticleEditor',
    Articles = 'factory.Articles',
}
export const widgets: IWidget[] = [
    {
        id: FactoryWidgets.Layout,
        name: 'Layout',
        description: 'Layout',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                currentIdsActionCreator={actions.currentIdsFactory.patch}
                component={LayoutContainer}
                props={props}
            />
        ),
    },
    {
        id: FactoryWidgets.FactoryPanel,
        name: 'FactoryPanel',
        description: 'FactoryPanel',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={FactoryPanel} props={props} />
        ),
    },
    {
        id: FactoryWidgets.ImportExportLayouts,
        name: 'Export',
        description: 'ImportExportLayouts',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ImportExportLayoutContainer}
                props={props}
            />
        ),
    },
    {
        id: FactoryWidgets.DesignerTree,
        name: 'DesignerTree',
        description: 'DesignerTree',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={DesignerTreeContainer}
                props={props}
            />
        ),
    },
    {
        id: FactoryWidgets.Layouts,
        name: 'Layouts',
        description: 'Layouts',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={LayoutsContainer}
                props={props}
            />
        ),
    },
    {
        id: FactoryWidgets.Properties,
        name: 'PropertiesModal',
        description: 'PropertiesModal',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ModalFlexPropertiesContainer}
                props={props}
            />
        ),
    },
    {
        id: FactoryWidgets.ArticleEditor,
        name: 'ArticleEditor',
        description: 'ArticleEditor',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                currentIdsActionCreator={actions.currentIdsFactory.patch}
                component={ArticleEditorContainer}
                props={props}
            />
        ),
    },
    {
        id: FactoryWidgets.Articles,
        name: 'Articles',
        description: 'Articles',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={ArticlesContainer}
                props={props}
            />
        ),
    },
];
