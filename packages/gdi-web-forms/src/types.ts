import { FC } from 'react';

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
    sequence: number;
    i18n?: I18n;
    layout: IFormLayout;
    groups: IFormLayoutGroup[];
    fields: IFormField[];
    submit: IFormSubmit;
};

export type IDetailsProps = {
    data: Json;
};

export type AllDetails = Record<string, FC<IDetailsProps>>;
