import { definitions as definitionsPageInstances } from './pageInstances';
import { definitions as definitionsPages } from './pages';
import { definitions as definitionsTemplates } from './templates';
import { definitions as definitionsWidgets } from './widgets';

export const allDefinitions: Partial<ICrudDefinitionsPerItemType> = {
    pageInstances: definitionsPageInstances,
    pages: definitionsPages,
    templates: definitionsTemplates,
    widgets: definitionsWidgets,
};
