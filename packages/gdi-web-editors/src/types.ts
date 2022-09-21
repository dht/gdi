import type { FC } from 'react';

export type EditorInput = string;

export type IEditorAction = {
    id: string;
    isActiveParams?: Json;
    command?: string;
    commandParams?: Json | string;
    noActiveState?: boolean;
    iconName?: string;
    title?: string;
};
