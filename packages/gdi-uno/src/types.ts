export type UnoLayoutFlavour = 'app' | 'template' | 'blog' | 'product';

export type Json = Record<string, any>;

export type IUnoLayout = {
    flavour: UnoLayoutFlavour;
};

export type SectionType = 'header' | 'overview' | 'additionalInfo' | 'media';

export type IUnoSection = {
    id: string;
    sectionType: SectionType;
    groupId: string;
    order?: number;
};

export type IUnoConfig = {
    id: string;
    sequence?: number;
    header?: string;
    layout: IUnoLayout;
    sections: IUnoSection[];
};
