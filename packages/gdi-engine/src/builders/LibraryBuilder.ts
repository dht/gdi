import { IBlocks, ITemplates } from '@gdi/web-ui';

type LibraryBuilderResponse = {
    templates: ITemplates;
    blocks: IBlocks;
};

export class LibraryBuilder {
    private library: LibraryBuilderResponse = {
        templates: {},
        blocks: {},
    };

    constructor() {}

    withTemplates(templates: ITemplates) {
        this.library.templates = {
            ...this.library.templates,
            ...templates,
        };
        return this;
    }

    withBlocks(blocks: IBlocks) {
        this.library.blocks = {
            ...this.library.blocks,
            ...blocks,
        };
        return this;
    }

    build(): LibraryBuilderResponse {
        return this.library;
    }
}
