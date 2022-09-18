import { ILibraryBuilder, ITemplates, LibraryBuilderResponse } from '../types';

export class LibraryBuilder implements ILibraryBuilder {
    private library: LibraryBuilderResponse = {
        templates: {},
        widgets: {},
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

    build(): LibraryBuilderResponse {
        return this.library;
    }
}
