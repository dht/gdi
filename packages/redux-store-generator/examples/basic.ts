import {
    generateReducersForStore,
    generateActionsForStore,
} from 'redux-store-generator';
import { combineReducers, createStore } from 'redux';

type IUser = {
    name: string;
    email: string;
};

type MyStore = {
    user: IUser;
};

const schema: MyStore = {
    user: {
        name: 'Michael',
        email: 'michael.m@example.com',
    },
};

const rootReducer = generateReducersForStore<MyStore>(schema);
const actions = generateActionsForStore<MyStore>(schema);

const store = createStore(combineReducers(rootReducer));

// Now you have a redux-store which responds to the auto-generated actions
// this actions can be dispatch on the store:
actions.user.patch({ email: 'michael@other-domain.com' });
actions.user.setAll({ name: 'Pia', email: 'pia@domain.com' });
