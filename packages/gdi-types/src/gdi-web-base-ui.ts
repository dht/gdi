// AUTO-GENERATED

export const A18 = {};

declare global {
    export type IUploadResult = {
        success: boolean;
        errorMessage?: string;
        data: Json;
    };

    export type IOption = {
        id: string;
        text?: string;
        iconName?: string;
        secondaryText?: string;
        shortKey?: IShortKey;
        value?: string | number | boolean;
        min?: number;
        max?: number;
        isGap?: number;
    };

    export type IOptions = IOption[];

    export type SwitchOption = {
        id: string;
        label?: string;
        iconName?: string;
        hint?: string;
    };

    export type IToolbarItem = {
        id: string;
        text: string;
        iconName?: string;
        secondaryText?: string;
    };

    export type ToastFlavour =
        | 'error'
        | 'success'
        | 'warning'
        | 'info'
        | 'custom'
        | 'promise';
}
