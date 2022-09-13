import React from 'react';
import { IWidget } from '@gdi/platformer';
import { FactoryPanel } from '../components/FactoryPanel/FactoryPanel';
import { ImportExportLayoutContainer } from '../containers/singles/ImportExportLayoutContainer';
import { DesignerTreeContainer } from '../containers/singles/DesignerTreeContainer';
import { ModalFlexPropertiesContainer } from '../containers/modals/ModalFlexPropertiesContainer';
import { LayoutsContainer } from '../containers/LayoutsContainer';
import { LayoutContainer } from '../containers/LayoutContainer';
import { CustomBlocksContainer } from '../containers/CustomBlocksContainer';
import { CustomBlocksSubContainer } from '../containers/CustomBlocksSubContainer';
import { CurrentIdsHoc } from '@gdi/platformer';
import { actions } from '../store';

export enum FactoryWidgets {
    FactoryPanel = 'factory.FactoryPanel',
    ImportExportLayouts = 'factory.ImportExportLayouts',
    DesignerTree = 'factory.DesignerTree',
    Layouts = 'factory.Layouts',
    Layout = 'factory.Layout',
    Properties = 'factory.Properties',
    CustomBlocks = 'factory.CustomBlocks',
    CustomBlock = 'factory.CustomBlock',
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
        component: (props: any) =>
            CurrentIdsHoc(actions.currentIdsFactory.patch)(
                <LayoutContainer {...props} />
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
        component: (props: any) => <FactoryPanel {...props} />,
    },
    {
        id: FactoryWidgets.ImportExportLayouts,
        name: 'Export',
        description: 'ImportExportLayouts',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ImportExportLayoutContainer {...props} />,
    },
    {
        id: FactoryWidgets.DesignerTree,
        name: 'DesignerTree',
        description: 'DesignerTree',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <DesignerTreeContainer {...props} />,
    },
    {
        id: FactoryWidgets.Layouts,
        name: 'Layouts',
        description: 'Layouts',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <LayoutsContainer {...props} />,
    },
    {
        id: FactoryWidgets.CustomBlocks,
        name: 'CustomBlocks',
        description: 'CustomBlocks',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <CustomBlocksContainer {...props} />,
    },
    {
        id: FactoryWidgets.CustomBlock,
        name: 'CustomBlock',
        description: 'CustomBlock',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <CustomBlocksSubContainer {...props} />,
    },
    {
        id: FactoryWidgets.Properties,
        name: 'PropertiesModal',
        description: 'PropertiesModal',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ModalFlexPropertiesContainer {...props} />,
    },
];
