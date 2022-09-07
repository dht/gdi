import { LayoutFlex } from './layout-flex/LayoutFlex';
import { blockInfo as LayoutFlexInfo } from './layout-flex';

import { LayoutFlow } from './layout-flow/LayoutFlow';
import { blockInfo as LayoutFlowInfo } from './layout-flow';

import { LayoutGrid } from './layout-grid/LayoutGrid';
import { blockInfo as LayoutGridInfo } from './layout-grid';

export const blocks: IBlocks = {
    'com.usegdi.templates.layout.layout-flex': {
        id: 'com.usegdi.templates.layout.layout-flex',
        component: LayoutFlex,
        info: LayoutFlexInfo,
    },
    'com.usegdi.templates.layout.layout-flow': {
        id: 'com.usegdi.templates.layout.layout-flow',
        component: LayoutFlow,
        info: LayoutFlowInfo,
    },
    'com.usegdi.templates.layout.layout-grid': {
        id: 'com.usegdi.templates.layout.layout-grid',
        component: LayoutGrid,
        info: LayoutGridInfo,
    },
};
