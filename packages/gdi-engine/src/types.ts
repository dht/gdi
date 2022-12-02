export type IEngineContextState = {
    isReady: boolean;
    widgets: IWidgets;
    patchContext: (change: Partial<IEngineContextState>) => void;
};

export type IGaEvent = {
    eventId: GaId;
    data: IGaData;
    nonInteractive?: boolean;
};

export type IGaData = {
    category: string;
    label: string;
    value?: number;
} & Json;

export type ISiteState = {
    analyticsOn: boolean;
};

export type ITopMenuItem = {
    href: string;
    title: string;
};

export type LibraryBuilderResponse = Optional<
    ITemplate,
    'breakpoints' | 'fonts' | 'palette' | 'locale' | 'images' | 'meta'
> & {
    templates: ITemplateMetas;
};
export interface ILibraryBuilder {
    withTemplate: (templates: ITemplate) => ILibraryBuilder;
    build: () => LibraryBuilderResponse;
}
