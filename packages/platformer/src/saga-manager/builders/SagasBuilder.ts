import { ISagas } from '../../types';

export class SagasBuilder {
    private sagas: ISagas = {};

    withSagas(sagas: ISagas) {
        this.sagas = {
            ...this.sagas,
            ...sagas,
        };

        return this;
    }

    build(): ISagas {
        return this.sagas;
    }
}
