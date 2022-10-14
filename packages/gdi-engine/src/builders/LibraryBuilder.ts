import { ILibraryBuilder, LibraryBuilderResponse } from '../types';

export class LibraryBuilder implements ILibraryBuilder {
    private library: LibraryBuilderResponse = {
        templates: {},
        pages: {},
        pageInstances: {},
        instances: {},
        instancesProps: {},
        widgets: {},
    };

    constructor() {}

    withTemplate(template: ITemplate) {
        const { meta } = template;

        this.library.templates = {
            ...this.library.templates,
            [meta.id]: meta,
        };

        this.library.pages = {
            ...this.library.pages,
            ...template.pages,
        };

        this.library.pageInstances = {
            ...this.library.pageInstances,
            ...template.pageInstances,
        };

        this.library.instances = {
            ...this.library.instances,
            ...template.instances,
        };

        this.library.instancesProps = {
            ...this.library.instancesProps,
            ...template.instancesProps,
        };

        this.library.widgets = {
            ...this.library.widgets,
            ...template.widgets,
        };

        return this;
    }

    build(): LibraryBuilderResponse {
        return this.library;
    }
}
