import { widgets as blocks } from './blocks';
import { widgets } from './widgets';
import { templateInfo } from './template.info';
import { pageInstances, pages } from './template.pages';

export const initTemplate = (libraryBuilder: ILibraryBuilder) => {
    libraryBuilder
        .withTemplates({
            basic: templateInfo,
        })
        .withWidgets(blocks)
        .withWidgets(widgets)
        .withPages(pages)
        .withPageInstances(pageInstances);
};
