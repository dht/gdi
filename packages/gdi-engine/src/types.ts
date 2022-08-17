import { IBlocks } from '@gdi/web-ui';

export type IEngineContextState = {
    isReady: boolean;
    blocks: IBlocks;
    patchContext: PatchContextMethod;
};

export type PatchContextMethod = (change: Partial<IEngineContextState>) => void;
