import {
    generateReducersForStore,
    generateActionsForStore,
} from 'redux-store-generator';
import { combineReducers, createStore } from 'redux';

type IUser = {
    name: string;
    email: string;
};

type ILog = {
    id: string;
    timestamp: number;
    message: string;
};

type IProduct = {
    id: string;
    name: string;
    price: number;
};

type IChatMessage = {
    id: string;
    displayName: string;
    timestamp: number;
    message: string;
    isSeen: boolean;
};

type IChat = {
    id: string;
    title: string;
    items: IChatMessage[];
};

type MyStore = {
    currentUser: IUser;
    logs: ILog[];
    products: Record<string, IProduct>;
    chats: Record<string, IChat>;
};

const schema: MyStore = {
    currentUser: {
        name: 'Michael',
        email: 'michael.m@example.com',
    },
    logs: [
        {
            id: '1',
            timestamp: 0,
            message: '',
        },
    ],
    products: {
        '1': {
            id: '1',
            name: 'Dji Mavic air 2',
            price: 1099,
        },
    },
    chats: {
        '1': {
            id: '1',
            title: 'Sales',
            items: [
                {
                    id: '1',
                    displayName: 'Laura',
                    isSeen: true,
                    message: "Yes, it's available",
                    timestamp: 0,
                },
            ],
        },
    },
};

const rootReducer = generateReducersForStore<MyStore>(schema);
const actions = generateActionsForStore<MyStore>(schema);

const store = createStore(combineReducers(rootReducer));

// Now you have a redux-store which responds to the auto-generated actions
// this actions can be dispatch on the store:

actions.currentUser.patch({ email: 'michael@other-domain.com' });
actions.currentUser.setAll({ name: 'Pia', email: 'pia@domain.com' });

actions.logs.push({ id: '2', message: '', timestamp: 0 });
actions.logs.pop();
actions.logs.pushMany([{ id: '2', message: '', timestamp: 0 }, { id: '3', message: '', timestamp: 0 }]); // prettier-ignore
actions.logs.setAll([{ id: '2', message: '', timestamp: 0 }, { id: '3', message: '', timestamp: 0 }]); // prettier-ignore
actions.logs.clear();

actions.products.add({ id: '2', name: '', price: 10 });
actions.products.setAll({ '2': { id: '2', name: '', price: 10 } }); // replaces the collection
actions.products.setMany({ '2': { id: '2', name: '', price: 10 } }); // changes specific items
actions.products.set('1', { id: '1', name: '', price: 10 });
actions.products.delete('1');
actions.products.patch('1', { name: 'New product name' });

actions.chats.add({ id: '2', title: '' });
actions.chats.setAll({ '2': { id: '2', title: '', items: [] } }); // replaces the collection
actions.chats.setMany({ '2': { id: '2', title: '', items: [] } }); // changes specific items
actions.chats.set('1', { id: '1', title: '' });
actions.chats.delete('1');
actions.chats.patch('1', { title: 'New product name' });
// and for the inner items
actions.chats.pushItem('1', { id: '1', displayName: '', timestamp: 0, message: '', isSeen: false }); // prettier-ignore
actions.chats.popItem('1');
actions.chats.pushManyItems('1', [{ id: '1', displayName: '', timestamp: 0, message: '', isSeen: false } ]); // prettier-ignore
actions.chats.setItems('1', [{ id: '1', displayName: '', timestamp: 0, message: '', isSeen: false } ]); // prettier-ignore
actions.chats.clearItems('1');

// helpers actions

// for GET
actions.currentUser.get();
actions.logs.get({});
actions.products.get({});
actions.chats.get({});

// for POST
actions.products.add({ name: '', price: 10 });
actions.chats.add({ title: '' });
