// AUTO-GENERATED

export const A14 = {};

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
    };

    export type SwitchOption = {
        id: string;
        label?: string;
        iconName?: string;
    };

    export type IToolbarItem = {
        id: string;
        text: string;
        iconName?: string;
        secondaryText?: string;
    };
}
