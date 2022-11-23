import { IGdiMetas, IMetaBuilder } from '../types';

export class MetaBuilder implements IMetaBuilder {
    private metas: IGdiMetas = {};

    constructor() {}

    withMeta(appId: string, meta: IGdiMeta) {
        this.metas[appId] = meta;
        return this;
    }

    build(): IGdiMetas {
        return this.metas;
    }
}
