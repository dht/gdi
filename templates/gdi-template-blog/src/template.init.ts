import { widgets as blocks } from './blocks';
import { widgets } from './widgets';
import { templateInfo } from './template.info';

export const initTemplates = (libraryBuilder: ILibraryBuilder) => {
    libraryBuilder
        .withTemplates({
            blog: templateInfo,
        })
        .withWidgets(blocks)
        .withWidgets(widgets);
};
