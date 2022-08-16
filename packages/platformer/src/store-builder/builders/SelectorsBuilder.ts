import { merge as _merge } from 'lodash';

type ISelector = (state: any) => any;
type ISelectors = Record<SelectorName, ISelector>;
type ISelectorsBucket = Record<CategoryId, ISelectors>;
export type ISelectorsByApp = Record<AppId, ISelectorsBucket>;

type AppId = string;
type CategoryId = string;
type SelectorName = string;

export class SelectorsBuilder {
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
