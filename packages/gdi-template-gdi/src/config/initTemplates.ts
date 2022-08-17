import { LibraryBuilder } from '@gdi/engine';
import { templates } from '../templates';

export const initTemplates = (libraryBuilder: LibraryBuilder) => {
    Object.keys(templates).forEach((key) => {
        const template = templates[key];

        libraryBuilder //
            .withTemplates({
                key: template.templateInfo,
            })
            .withBlocks(template.blocks);
    });
};
