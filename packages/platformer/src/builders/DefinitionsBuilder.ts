import { IDefinitionsBuilder } from '../types';
import { merge } from 'lodash';

export class DefinitionsBuilder implements IDefinitionsBuilder {
    private definitions: Partial<ICrudDefinitionsPerItemType> = {};

    withDefinitions(definitions: Partial<ICrudDefinitionsPerItemType>) {
        this.definitions = merge(this.definitions, definitions);
        return this;
    }

    build(): ICrudDefinitionsPerItemType {
        return this.definitions as ICrudDefinitionsPerItemType;
    }
}
