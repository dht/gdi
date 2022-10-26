import { generateReducersForStore } from 'redux-store-generator';
import { IMoneyStore } from './types';
import { actions } from './actions';

export const initialState: IMoneyStore = {
    appStateMoney: {
        stateKey: 'money',
        currentCategory: 'income',
        inflationBehavior: 'up',
    },
    moneyLines: {
        '1': {
            id: '1',
            category: 'assets',
            topic: 'credit',
            sum: 100000000,
            behavior: 'up',
        },
    },
    moneyBehaviors: {
        '1': {
            id: '1',
            key: 'up',
            formula: '({sum, monthDelta}) => sum += sum * monthDelta',
        },
    },
};

export const reducers = generateReducersForStore<IMoneyStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.moneyLines.setAll({}));
        store.dispatch(actions.moneyBehaviors.setAll({}));
    });
    return store;
};
