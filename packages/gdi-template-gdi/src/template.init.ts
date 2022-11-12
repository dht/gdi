import { meta, instances, instancesProps, pages, pageInstances } from './template.parts'; // prettier-ignore
import { blocks } from './blocks';
import { widgets } from './widgets';

export const template: ITemplate = {
    meta,
    instances,
    instancesProps,
    pageInstances,
    pages,
    widgets: {
        ...blocks,
        ...widgets,
    },
};

export const initTemplate = (libraryBuilder: ILibraryBuilder) => {
    libraryBuilder.withTemplate(template);
};
