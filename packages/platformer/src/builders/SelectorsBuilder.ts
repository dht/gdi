import { merge } from 'shared-base';
import { ISelectorsBucket, ISelectorsBuilder, ISelectorsByApp } from '../types';

export class SelectorsBuilder implements ISelectorsBuilder {
    private selectors: ISelectorsByApp = {};

    constructor() {}

    withSelectors(appId: string, selectorsBucket: ISelectorsBucket) {
        this.selectors = merge(this.selectors, {
            [appId]: selectorsBucket,
        }) as ISelectorsByApp;

        return this;
    }

    build() {
        return this.selectors;
    }
}
