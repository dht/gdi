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
    isExtra?: boolean;
    isGap?: boolean;
    hint?: string;
    options?: IOptions;
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
