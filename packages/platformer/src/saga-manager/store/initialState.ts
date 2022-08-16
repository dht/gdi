import { ISagasState } from '../../types';

export type SagaStore = {
    sagas: ISagasState;
};

export const initialState: SagaStore = {
    sagas: {
        root: {
            id: 'root',
        },
    },
};

export default initialState;
