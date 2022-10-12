import { ILibraryBuilder, ITemplates, LibraryBuilderResponse } from '../types';

export class LibraryBuilder implements ILibraryBuilder {
    private library: LibraryBuilderResponse = {
        templates: {},
        widgets: {},
        pages: {},
        pageInstances: {},
    };

    constructor() {}

    withTemplates(templates: ITemplates) {
        this.library.templates = {
            ...this.library.templates,
            ...templates,
        };
        return this;
    }

    withWidgets(widgets: IWidgets) {
        this.library.widgets = {
            ...this.library.widgets,
            ...widgets,
        };
        return this;
    }

    withPages(pages: IPages) {
        this.library.pages = {
            ...this.library.pages,
            ...pages,
        };
        return this;
    }

    withPageInstances(pageInstances: IPageInstances) {
        this.library.pageInstances = {
            ...this.library.pageInstances,
            ...pageInstances,
        };
        return this;
    }

    build(): LibraryBuilderResponse {
        return this.library;
    }
}
