import { IDefinitionsBuilder } from '../types';
import { merge } from 'lodash';

type DefinitionsPerApp = Record<string, Partial<ICrudDefinitionsPerItemType>>;

export class DefinitionsBuilder implements IDefinitionsBuilder {
    private definitions: Partial<DefinitionsPerApp> = {};

    withDefinitions(
        appId: string,
        definitions: Partial<ICrudDefinitionsPerItemType>
    ) {
        this.definitions[appId] = this.definitions[appId] || {};
        this.definitions[appId] = merge(this.definitions[appId], definitions);
        return this;
    }

    build(): ICrudDefinitionsPerItemType {
        return this.definitions as ICrudDefinitionsPerItemType;
    }
}
