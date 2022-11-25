// AUTO-GENERATED

export const A0 = {};

declare global {
    export type IEngineContextState = {
        isReady: boolean;
        widgets: IWidgets;
        patchContext: (change: Partial<IEngineContextState>) => void;
    };

    export type ISiteContext = {
        menuItems: ITopMenuItem[];
        datasets: Json;
        patchContext: (change: Partial<ISiteContext>) => void;
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
}
