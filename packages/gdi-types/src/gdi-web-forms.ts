// AUTO-GENERATED

import type { FC } from 'react';

export const A22 = {};

declare global {
    export type LayoutFlavour = 'singleColumn' | 'twoColumns' | 'threeColumns';

    export type LabelSize = 'base' | 'compact';

    export type IFormLayout = {
        flavour: LayoutFlavour;
        width?: number;
        padding?: number;
        flex?: number[];
        labelSize?: LabelSize;
    };

    export type IFormLayoutGroup = {
        id: string;
        layoutColumnIndex: number;
    };

    export type FieldType =
        | 'checkbox'
        | 'text'
        | 'email'
        | 'url'
        | 'choice'
        | 'color'
        | 'date'
        | 'select'
        | 'hidden'
        | 'imageUpload'
        | 'number'
        | 'boolean'
        | 'paragraph'
        | 'phone'
        | 'barSelect'
        | 'password'
        | 'tags'
        | 'details'
        | 'slider';

    export type IFormField = {
        id: string;
        fieldType: FieldType;
        groupId: string;
        label?: string;
        placeholder?: string;
        description?: string;
        isRequired?: boolean;
        optionSelector?: string;
        showIf?: string;
        params?: Json;
        order?: number;
    };

    export type IFormSubmit = {
        title: string;
        groupId?: string;
        agreements?: ISubmitAgreement[];
    };

    export type ISubmitAgreement = {
        id: string;
        text: string;
        linkText: string;
        url: string;
        isRequired?: boolean;
    };

    export type I18n = 'none' | 'useTranslation';

    export type IFormConfig = {
        id: string;
        sequence?: number;
        header?: string;
        i18n?: I18n;
        layout: IFormLayout;
        groups: IFormLayoutGroup[];
        fields: IFormField[];
        submit: IFormSubmit;
        external?: Json;
    };

    export type IDetailsProps = {
        data: Json;
    };

    export type AllDetails = Record<string, FC<IDetailsProps>>;

    type Method = (...args: any[]) => any | Promise<any>;

    export type AllMethods = Record<string, Method>;

    export type IFormProps = {
        config: IFormConfig;
        data: Json;
        allOptions?: Json;
        allDetails?: AllDetails;
        allMethods?: AllMethods;
        autoFocus?: boolean;
        showGroup?: (groupId: string, data: Json) => boolean;
        onSave: (change: Json, allData: Json) => Promise<boolean>;
        onChange?: (change: Json) => void;
        onClose?: () => void;
        children?: JSX.Element | JSX.Element[];
        methods?: Record<string, Method>;
        t?: (key: string) => string;
    };
}
