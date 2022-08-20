import { IBlocks } from '@gdi/web-ui';

export type IEngineContextState = {
    isReady: boolean;
    blocks: IBlocks;
    patchContext: (change: Partial<IEngineContextState>) => void;
};

export type ISiteContext = {
    menuItems: IMenuItem[];
    patchContext: (change: Partial<ISiteContext>) => void;
};

export type IMenuItem = {
    href: string;
    title: string;
};
