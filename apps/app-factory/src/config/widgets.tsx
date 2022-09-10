import React from 'react';
import { IWidget } from '@gdi/platformer';
import { FactoryContainer } from '../containers/FactoryContainer';
import { FactoryPanel } from '../components/FactoryPanel/FactoryPanel';
import { ImportExportContainer } from '../containers/singles/ImportExportContainer';
import { DesignerTreeContainer } from '../containers/singles/DesignerTreeContainer';

export enum FactoryWidgets {
    Factory = 'factory.Factory',
    FactoryPanel = 'factory.FactoryPanel',
    ImportExport = 'factory.ImportExport',
    DesignerTree = 'factory.DesignerTree',
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
];
