import _merge from 'lodash/merge';
import { ISelectorsBucket, ISelectorsBuilder, ISelectorsByApp } from '../types';

export class SelectorsBuilder implements ISelectorsBuilder {
    private selectors: ISelectorsByApp = {};

    constructor() {}

    withSelectors(appId: string, selectorsBucket: ISelectorsBucket) {
        this.selectors = _merge(this.selectors, {
            [appId]: selectorsBucket,
        });

        return this;
    }

    build() {
        return this.selectors;
    }
}
