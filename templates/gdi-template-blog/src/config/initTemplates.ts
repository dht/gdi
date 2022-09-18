import { templates } from '../templates';

export const initTemplates = (libraryBuilder: ILibraryBuilder) => {
    Object.keys(templates).forEach((key) => {
        const template = templates[key];

        libraryBuilder //
            .withTemplates({
                key: template.templateInfo,
            })
            .withWidgets(template.widgets);
    });
};
