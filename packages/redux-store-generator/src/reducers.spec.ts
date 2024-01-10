import { generateActionsForStore } from './actions';
import storeState from './fixtures/store-state';
import {
    generateSingle,
    generateQueue,
    generateCollection,
    generateReducersForStore,
    generateGroupedList,
} from './reducers';
import { Chance } from 'chance';

describe('reducers', () => {
    let state = {} as any;
    let nextState, actions, action, chance: any;
    const __null__ = null as any;

    const allActions = generateActionsForStore(storeState);
    chance = new Chance();

    beforeEach(() => {
        // to ensure store immutability
        state = deepFreeze({ ...storeState });
    });

    it('should generate a SingleNode reducer', () => {
        const reducer = generateSingle('appState');
        const appState = state.appState;
        actions = allActions.appState;

        // setAll
        action = actions.setAll({ isLoading: true, isSaving: true });
        nextState = reducer(appState, action);
        expect(nextState).toEqual({ isLoading: true, isSaving: true });

        // patch
        action = actions.patch({ isSaving: true });
        nextState = reducer(appState, action);
        expect(nextState).toEqual({ isLoading: true, isSaving: true });

        // foreign
        action = { type: 'FOREIGN', payload: { isSaving: true } };
        nextState = reducer(appState, action);
        expect(nextState).toEqual(appState);

        // blank
        nextState = reducer(undefined, { type: 'FOREIGN' });
        expect(nextState).toEqual({});
        nextState = reducer(__null__, { type: 'FOREIGN' });
        expect(nextState).toEqual({});
    });

    it('should generate a QueueNode reducer', () => {
        const reducer = generateQueue('logs');
        const logs = state.logs;
        actions = allActions.logs;

        // setAll
        action = actions.setAll([{ id: '1' }]);
        nextState = reducer(logs, action);
        expect(nextState).toEqual([{ id: '1' }]);

        // push
        action = actions.push({ id: '2' });
        nextState = reducer(logs, action);
        expect(nextState).toEqual([{ id: '1' }, { id: '2' }]);

        // pop
        action = actions.pop();
        nextState = reducer(logs, action);
        expect(nextState).toEqual([]);

        // clear
        action = actions.clear();
        nextState = reducer(logs, action);
        expect(nextState).toEqual([]);

        // pushMany
        action = actions.pushMany([{ id: '3' }, { id: '4' }]);
        nextState = reducer(logs, action);
        expect(nextState).toEqual([{ id: '1' }, { id: '3' }, { id: '4' }]);

        // pushMany empty
        action = actions.pushMany([]);
        nextState = reducer(logs, action);
        expect(nextState).toEqual([{ id: '1' }]);

        // pushMany no payload
        action = actions.pushMany(__null__);
        nextState = reducer(logs, action);
        expect(nextState).toEqual([{ id: '1' }]);

        // foreign
        action = { type: 'FOREIGN', payload: { id: '1' } };
        nextState = reducer(logs, action);
        expect(nextState).toEqual([{ id: '1' }]);

        // blank
        nextState = reducer(undefined, { type: 'FOREIGN' });
        expect(nextState).toEqual([]);
        nextState = reducer(__null__, { type: 'FOREIGN' });
        expect(nextState).toEqual([]);
    });

    it('should generate a CollectionNode reducer', () => {
        const reducer = generateCollection('products');
        const products = state.products;
        actions = allActions.products;
        const title1 = chance.word();
        const title2 = chance.word();

        // setAll
        action = actions.setAll({ '1': { id: '1', title: title1 } });
        nextState = reducer(products, action);
        expect(nextState).toEqual({ '1': { id: '1', title: title1 } });

        // set
        action = actions.set('2', { id: '2', title: title1 });
        nextState = reducer(products, action);
        expect(nextState).toEqual({
            '1': { id: '1', title: 'first product' },
            '2': { id: '2', title: title1 },
        });

        // patch
        action = actions.patch('1', { title: title1 });
        nextState = reducer(products, action);
        expect(nextState).toEqual({
            '1': { id: '1', title: title1 },
        });

        // patch no id
        action = actions.patch(__null__, __null__);
        nextState = reducer(products, action);
        expect(nextState).toEqual(products);

        // delete
        action = actions.delete('1');
        nextState = reducer(products, action);
        expect(nextState).toEqual({});

        // delete no id
        action = actions.delete(__null__);
        nextState = reducer(products, action);
        expect(nextState).toEqual(products);

        // setMany
        action = actions.setMany({
            '2': { id: '2', title: title1 },
            '3': { id: '3', title: title2 },
        });
        nextState = reducer(products, action);
        expect(nextState).toEqual({
            '1': { id: '1', title: 'first product' },
            '2': { id: '2', title: title1 },
            '3': { id: '3', title: title2 },
        });

        // setMany no payload
        action = actions.setMany(__null__);
        nextState = reducer(products, action);
        expect(nextState).toEqual(products);

        // setMany no items
        action = actions.setMany({});
        nextState = reducer(products, action);
        expect(nextState).toEqual(products);

        // foreign
        action = { type: 'FOREIGN', payload: { isSaving: true } };
        nextState = reducer(products, action);
        expect(nextState).toEqual(products);

        // blank
        nextState = reducer(undefined, { type: 'FOREIGN' });
        expect(nextState).toEqual({});
        nextState = reducer(__null__, { type: 'FOREIGN' });
        expect(nextState).toEqual({});
    });

    it('should generate a GroupedList reducer', () => {
        const reducer = generateGroupedList('chats');
        const chats = state.chats;
        actions = allActions.chats;
        let payload;
        const title1 = chance.word();
        const title2 = chance.word();

        // setAll
        payload = {
            '1': {
                id: '1',
                title: title1,
                items: [{ id: '', timestamp: 1, content: '', isMe: true }],
            },
        };
        action = actions.setAll(payload);
        nextState = reducer(chats, action);
        expect(nextState).toEqual(payload);

        // set
        action = actions.set('2', { id: '2', title: title1 });
        nextState = reducer(chats, action);
        expect(nextState).toEqual({
            '1': {
                id: '1',
                title: 'chat 1',
                items: [{ id: '1', isMe: true, content: '', timestamp: 0 }],
            },
            '2': { id: '2', title: title1 },
        });

        // patch
        action = actions.patch('1', { title: title1 });
        nextState = reducer(chats, action);
        expect(nextState).toEqual({
            '1': {
                id: '1',
                items: [{ id: '1', isMe: true, content: '', timestamp: 0 }],
                title: title1,
            },
        });

        // patch no id
        action = actions.patch(__null__, __null__);
        nextState = reducer(chats, action);
        expect(nextState).toEqual(chats);

        // delete
        action = actions.delete('1');
        nextState = reducer(chats, action);
        expect(nextState).toEqual({});

        // delete no id
        action = actions.delete(__null__);
        nextState = reducer(chats, action);
        expect(nextState).toEqual(chats);

        // setMany
        action = actions.setMany({
            '2': { id: '2', title: title1, items: [] },
            '3': { id: '3', title: title2, items: [] },
        });

        nextState = reducer(chats, action);
        expect(nextState).toEqual({
            '1': {
                id: '1',
                title: 'chat 1',
                items: [{ id: '1', isMe: true, content: '', timestamp: 0 }],
            },
            '2': { id: '2', title: title1, items: [] },
            '3': { id: '3', title: title2, items: [] },
        });

        // setMany no payload
        action = actions.setMany(__null__);
        nextState = reducer(chats, action);
        expect(nextState).toEqual(chats);

        // setMany no items
        action = actions.setMany({});
        nextState = reducer(chats, action);
        expect(nextState).toEqual(chats);

        // foreign
        action = { type: 'FOREIGN', payload: { isSaving: true } };
        nextState = reducer(chats, action);
        expect(nextState).toEqual(chats);

        // blank
        nextState = reducer(undefined, { type: 'FOREIGN' });
        expect(nextState).toEqual({});
        nextState = reducer(__null__, { type: 'FOREIGN' });
        expect(nextState).toEqual({});

        // setItems
        nextState = reducer(chats, {
            type: 'SET_CHATS_ITEMS',
            payload: {
                id: '1',
                items: [
                    { id: '1', isMe: true },
                    { id: '2', isMe: false },
                ],
            },
        });
        expect(nextState).toEqual({
            '1': {
                id: '1',
                title: 'chat 1',
                items: [
                    { id: '1', isMe: true },
                    { id: '2', isMe: false },
                ],
            },
        });

        // pushItem
        nextState = reducer(chats, {
            type: 'PUSH_CHATS_ITEM',
            payload: {
                id: '1',
                items: [{ id: '3', isMe: true }],
            },
        });
        expect(nextState).toEqual({
            '1': {
                id: '1',
                title: 'chat 1',
                items: [
                    { id: '1', isMe: true, content: '', timestamp: 0 },
                    { id: '3', isMe: true },
                ],
            },
        });

        // popItem
        nextState = reducer(chats, {
            type: 'POP_CHATS_ITEM',
            payload: {
                id: '1',
            },
        });
        expect(nextState).toEqual({
            '1': {
                id: '1',
                title: 'chat 1',
                items: [],
            },
        });

        // clearItems
        nextState = reducer(chats, {
            type: 'CLEAR_CHATS_ITEMS',
            payload: {
                id: '1',
            },
        });
        expect(nextState).toEqual({
            '1': {
                id: '1',
                title: 'chat 1',
                items: [],
            },
        });

        // pushManyItems
        nextState = reducer(chats, {
            type: 'PUSH_MANY_CHATS_ITEMS',
            payload: {
                id: '1',
                items: [
                    { id: '3', isMe: false },
                    { id: '4', isMe: true },
                ],
            },
        });
        expect(nextState).toEqual({
            '1': {
                id: '1',
                title: 'chat 1',
                items: [
                    { id: '1', isMe: true, content: '', timestamp: 0 },
                    { id: '3', isMe: false },
                    { id: '4', isMe: true },
                ],
            },
        });
    });

    it('should generate combined reducers from store structure', () => {
        const combinedReducers = generateReducersForStore(storeState);

        expect(Object.keys(combinedReducers)).toEqual([
            'appState',
            'products',
            'logs',
            'chats',
        ]);
    });
});

// credit: https://github.com/substack/deep-freeze
const deepFreeze = (o: any) => {
    Object.freeze(o);

    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (
            o.hasOwnProperty(prop) &&
            o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])
        ) {
            deepFreeze(o[prop]);
        }
    });

    return o;
};
