// AUTO-GENERATED

export const A24 = {};

declare global {
    export type IUploadResult = {
        success: boolean;
        errorMessage?: string;
        data: Json;
    };

    export type IOption = {
        id: string;
        text: string;
        iconName?: string;
        secondaryText?: string;
        shortKey?: IShortKey;
        value?: string | number | boolean;
        min?: number;
        max?: number;
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
        text?: string;
        textKey?: string;
        iconName?: string;
        secondaryText?: string;
        isGap?: boolean;
        options?: IOptions;
    };

    export type ToastFlavour =
        | 'error'
        | 'success'
        | 'warning'
        | 'info'
        | 'custom'
        | 'promise';

    export type MouseEv<T = HTMLElement> = React.MouseEvent<T>;
    export type KeyboardEv<T = HTMLElement> = React.KeyboardEvent<T>;

    export type IPoint = {
        x: number;
        y: number;
    };
}
