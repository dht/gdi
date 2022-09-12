import React from 'react';
import { IWidget } from '@gdi/platformer';
import { FactoryContainer } from '../containers/FactoryContainer';
import { FactoryPanel } from '../components/FactoryPanel/FactoryPanel';
import { ImportExportContainer } from '../containers/singles/ImportExportContainer';
import { DesignerTreeContainer } from '../containers/singles/DesignerTreeContainer';
import { LayoutsContainer } from '../containers/LayoutsContainer';
import { CustomBlocksContainer } from '../containers/CustomBlocksContainer';

export enum FactoryWidgets {
    Factory = 'factory.Factory',
    FactoryPanel = 'factory.FactoryPanel',
    ImportExport = 'factory.ImportExport',
    DesignerTree = 'factory.DesignerTree',
    Layouts = 'factory.Layouts',
    CustomBlocks = 'factory.CustomBlocks',
}
export const widgets: IWidget[] = [
    {
        id: FactoryWidgets.Factory,
        name: 'Factory',
        description: 'Factory',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <FactoryContainer {...props} />,
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
        id: FactoryWidgets.ImportExport,
        name: 'Export',
        description: 'ImportExport',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <ImportExportContainer {...props} />,
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
];
