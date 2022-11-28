// AUTO-GENERATED

export const A22 = {};

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
        isExtra?: boolean;
        isGap?: boolean;
        hint?: string;
        groupId?: string;
        options?: IOptions;
        // for filters
        value?: string | number | boolean;
        min?: number;
        max?: number;
        disabled?: boolean;
    };

    export type IOptions = IOption[];

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
