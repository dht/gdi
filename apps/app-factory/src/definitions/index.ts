import { definitions as definitionsArticles } from './articles';
import { definitions as definitionsLayouts } from './layouts';

export const allDefinitions: Partial<ICrudDefinitionsPerItemType> = {
    article: definitionsArticles,
    layout: definitionsLayouts,
};
