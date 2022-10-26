import { definitions as definitionsProjects } from './projects';
import { definitions as definitionsTickets } from './tickets';

export const allDefinitions: Partial<ICrudDefinitionsPerItemType> = {
    project: definitionsProjects,
    ticket: definitionsTickets,
};
