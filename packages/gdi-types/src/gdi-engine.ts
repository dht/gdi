// AUTO-GENERATED

export const A0 = {};

declare global {
    type TemplateId = string;

    export type IAuthor = {
        name: string;
        email?: string;
        url?: string;
    };

    export type ITemplateInfo = {
        id: TemplateId;
        version: string;
        author?: IAuthor;
        widgetsCount?: number;
    };

    export type ITemplate = {
        widgets: IWidgets;
        templateInfo: ITemplateInfo;
    };

    export type ITemplates = Record<string, ITemplateInfo>;

    export type IEngineContextState = {
        isReady: boolean;
        widgets: IWidgets;
        patchContext: (change: Partial<IEngineContextState>) => void;
    };

    export type ISiteContext = {
        menuItems: ITopMenuItem[];
        patchContext: (change: Partial<ISiteContext>) => void;
    };

    export type ITopMenuItem = {
        href: string;
        title: string;
    };

    export type LibraryBuilderResponse = {
        templates: ITemplates;
        pageInstances: IPageInstances;
        pages: IPages;
        widgets: IWidgets;
    };
    export interface ILibraryBuilder {
        withTemplates: (templates: ITemplates) => ILibraryBuilder;
        withWidgets: (widgets: IWidgets) => ILibraryBuilder;
        withPageInstances: (pageInstances: IPageInstances) => ILibraryBuilder;
        withPages: (pages: IPages) => ILibraryBuilder;
        build: () => LibraryBuilderResponse;
    }
}
