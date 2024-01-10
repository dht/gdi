import * as ac from './actions';
import myStore from './fixtures/store-state';
import { Chance } from 'chance';

describe('action creators', () => {
    const chance = new Chance();

    describe('SingleNode', () => {
        it('should generate a get action-creator', () => {
            const _get = ac.single_getAction('appState');
            const action = _get();
            expect(action).toEqual({
                type: 'GET_APPSTATE',
            });
        });

        it('should generate a set action-creator', () => {
            const _set = ac.single_setAction('appState');
            const payload = { isLoading: true };
            const action = _set(payload);
            expect(action).toEqual({
                type: 'SET_APPSTATE',
                payload,
            });
        });

        it('should generate a patch action-creator', () => {
            const _patch = ac.single_patchAction('appState');
            const payload = { isLoading: true };
            const action = _patch(payload);
            expect(action).toEqual({
                type: 'PATCH_APPSTATE',
                payload,
            });
        });

        it('should generate all actions', () => {
            const actions = ac.single_all('appState');
            expect(Object.keys(actions)).toEqual(['get', 'setAll', 'patch']);
        });
    });

    describe('QueueNode', () => {
        it('should generate a get action-creator', () => {
            const _get = ac.queue_getAction('queue');
            const payload = { id: 1 };
            const action = _get(payload);
            expect(action).toEqual({
                type: 'GET_QUEUE',
                payload,
            });
        });

        it('should generate a get action-creator (no payload)', () => {
            const _get = ac.queue_getAction('queue');
            const action = _get();
            expect(action).toEqual({
                type: 'GET_QUEUE',
                payload: {},
            });
        });

        it('should generate a set all action-creator', () => {
            const _setAll = ac.queue_setAction('logs');
            const payload = { id: 1 };
            const action = _setAll(payload);
            expect(action).toEqual({
                type: 'SET_LOGS',
                payload,
            });
        });

        it('should generate a push action-creator', () => {
            const _push = ac.queue_pushAction('logs');
            const payload = { id: 1 };
            const action = _push(payload);
            expect(action).toEqual({
                type: 'PUSH_LOG',
                payload,
            });
        });

        it('should generate a pop action-creator', () => {
            const _pop = ac.queue_popAction('logs');
            const action = _pop();
            expect(action).toEqual({
                type: 'POP_LOG',
            });
        });

        it('should generate a clear action-creator', () => {
            const _clear = ac.queue_clearAction('logs');
            const action = _clear();
            expect(action).toEqual({
                type: 'CLEAR_LOGS',
            });
        });

        it('should generate a pushMany action-creator', () => {
            const _pushMany = ac.queue_pushManyAction('logs');
            const payload = [{ id: 1 }];
            const action = _pushMany(payload);
            expect(action).toEqual({
                type: 'PUSH_MANY_LOGS',
                payload: {
                    items: payload,
                },
            });
        });

        it('should generate all actions', () => {
            const actions = ac.queue_all('logs');
            expect(Object.keys(actions)).toEqual([
                'get',
                'setAll',
                'push',
                'pop',
                'clear',
                'pushMany',
            ]);
        });
    });

    describe('CollectionNode', () => {
        it('should generate a get action-creator', () => {
            const _get = ac.collection_getAction('products');
            const sortBy = chance.word();
            const payload = { sortBy };
            const action = _get(payload);
            expect(action).toEqual({
                type: 'GET_PRODUCTS',
                payload,
            });
        });

        it('should generate a get action-creator (no payload)', () => {
            const _get = ac.collection_getAction('products');
            const action = _get();
            expect(action).toEqual({
                type: 'GET_PRODUCTS',
                payload: {},
            });
        });

        it('should generate a set action-creator', () => {
            const _setAll = ac.collection_setAllAction('products');
            const payload = { '1': { id: '1' } };
            const action = _setAll(payload);
            expect(action).toEqual({
                type: 'SET_PRODUCTS',
                payload,
            });
        });

        it('should generate a add action-creator', () => {
            const _add = ac.collection_addAction('products');
            const payload = { isLoading: true };
            const action = _add(payload);
            expect(action).toEqual({
                type: 'ADD_PRODUCT',
                payload,
            });
        });

        it('should generate a set action-creator', () => {
            const _set = ac.collection_setAction('products');
            const payload = { isLoading: true };
            const action = _set('1', payload);
            expect(action).toEqual({
                type: 'SET_PRODUCT',
                payload: {
                    id: '1',
                    ...payload,
                },
            });
        });

        it('should generate a patch action-creator', () => {
            const _patch = ac.collection_patchAction('products');
            const payload = { isLoading: true };
            const action = _patch('1', payload);
            expect(action).toEqual({
                type: 'PATCH_PRODUCT',
                payload: {
                    id: '1',
                    ...payload,
                },
            });
        });

        it('should generate a delete action-creator', () => {
            const _delete = ac.collection_deleteAction('products');
            const action = _delete('1');
            expect(action).toEqual({
                type: 'DELETE_PRODUCT',
                payload: {
                    id: '1',
                },
            });
        });

        it('should generate a setMany action-creator', () => {
            const _setMany = ac.collection_setManyAction('products');
            const payload = { id: '1' };
            const action = _setMany(payload);
            expect(action).toEqual({
                type: 'SET_MANY_PRODUCTS',
                payload,
            });
        });

        it('should generate all actions', () => {
            const actions = ac.collection_all('products');
            expect(Object.keys(actions)).toEqual([
                'get',
                'setAll',
                'set',
                'add',
                'patch',
                'delete',
                'setMany',
            ]);
        });
    });

    describe('GroupedListNode', () => {
        it('should generate a get action-creator', () => {
            const _get = ac.groupedList_getAction('chats');
            const sortBy = chance.word();
            const payload = { sortBy };
            const action = _get(payload);
            expect(action).toEqual({
                type: 'GET_CHATS',
                payload,
            });
        });

        it('should generate a get action-creator (no payload)', () => {
            const _get = ac.groupedList_getAction('chats');
            const action = _get();
            expect(action).toEqual({
                type: 'GET_CHATS',
                payload: {},
            });
        });

        it('should generate a set action-creator', () => {
            const _setAll = ac.groupedList_setAllAction('chats');
            const payload = { '1': { id: '1' } };
            const action = _setAll(payload);
            expect(action).toEqual({
                type: 'SET_CHATS',
                payload,
            });
        });

        it('should generate a add action-creator', () => {
            const _add = ac.groupedList_addAction('chats');
            const payload = { isLoading: true };
            const action = _add(payload);
            expect(action).toEqual({
                type: 'ADD_CHAT',
                payload,
            });
        });

        it('should generate a set action-creator', () => {
            const _set = ac.groupedList_setAction('chats');
            const payload = { isLoading: true };
            const action = _set('1', payload);
            expect(action).toEqual({
                type: 'SET_CHAT',
                payload: {
                    id: '1',
                    ...payload,
                },
            });
        });

        it('should generate a patch action-creator', () => {
            const _patch = ac.groupedList_patchAction('chats');
            const payload = { isLoading: true };
            const action = _patch('1', payload);
            expect(action).toEqual({
                type: 'PATCH_CHAT',
                payload: {
                    id: '1',
                    ...payload,
                },
            });
        });

        it('should generate a delete action-creator', () => {
            const _delete = ac.groupedList_deleteAction('chats');
            const action = _delete('1');
            expect(action).toEqual({
                type: 'DELETE_CHAT',
                payload: {
                    id: '1',
                },
            });
        });

        it('should generate a setMany action-creator', () => {
            const _setMany = ac.groupedList_setManyAction('chats');
            const payload = [{ id: '1' }];
            const action = _setMany(payload);
            expect(action).toEqual({
                type: 'SET_MANY_CHATS',
                payload,
            });
        });

        it('should generate a getItems action-creator', () => {
            const _getItems = ac.groupedList_getItems('chats');
            const id = chance.word();
            const payload = [{ id: '1' }];
            const action = _getItems(id, payload);
            expect(action).toEqual({
                type: 'GET_CHATS_ITEMS',
                payload: {
                    id,
                    ...payload,
                },
            });
        });

        it('should generate a setItems action-creator', () => {
            const _setItems = ac.groupedList_setItems('chats');
            const id = chance.word();
            const payload = [{ id: '1' }];
            const action = _setItems(id, payload);
            expect(action).toEqual({
                type: 'SET_CHATS_ITEMS',
                payload: {
                    id,
                    payload: {
                        items: payload,
                    },
                },
            });
        });

        it('should generate a pushItem action-creator', () => {
            const _pushItem = ac.groupedList_pushItem('chats');
            const id = chance.word();
            const payload = { id: '1', title: 'good' };
            const action = _pushItem(id, payload);
            expect(action).toEqual({
                type: 'PUSH_CHATS_ITEM',
                payload: {
                    id,
                    items: [payload],
                },
            });
        });

        it('should generate a popItem action-creator', () => {
            const _popItem = ac.groupedList_popItem('chats');
            const id = chance.word();
            const action = _popItem(id);
            expect(action).toEqual({
                type: 'POP_CHATS_ITEM',
                payload: {
                    id,
                },
            });
        });

        it('should generate a clearItems action-creator', () => {
            const _clearItems = ac.groupedList_clearItems('chats');
            const id = chance.word();
            const action = _clearItems(id);
            expect(action).toEqual({
                type: 'CLEAR_CHATS_ITEMS',
                payload: {
                    id,
                },
            });
        });

        it('should generate a pushManyItems action-creator', () => {
            const _pushManyItems = ac.groupedList_pushManyItems('chats');
            const id = chance.word();
            const payload = [{ id: '1' }];
            const action = _pushManyItems(id, payload);
            expect(action).toEqual({
                type: 'PUSH_MANY_CHATS_ITEMS',
                payload: {
                    id,
                    items: payload,
                },
            });
        });

        it('should generate all actions', () => {
            const actions = ac.groupedList_all('chats');
            expect(Object.keys(actions)).toEqual([
                'get',
                'setAll',
                'set',
                'add',
                'patch',
                'delete',
                'setMany',
                'getItems',
                'setItems',
                'pushItem',
                'popItem',
                'clearItems',
                'pushManyItems',
            ]);
        });
    });

    describe('from structure', () => {
        it('should generate action-creators from store structure', () => {
            const actions = ac.generateActionsForStore(myStore);
            expect(clearMethods(actions)).toEqual({
                appState: {
                    get: true,
                    setAll: true,
                    patch: true,
                },
                products: {
                    get: true,
                    setAll: true,
                    set: true,
                    add: true,
                    patch: true,
                    delete: true,
                    setMany: true,
                },
                logs: {
                    get: true,
                    setAll: true,
                    push: true,
                    pop: true,
                    clear: true,
                    pushMany: true,
                },
                chats: {
                    add: true,
                    clearItems: true,
                    delete: true,
                    get: true,
                    getItems: true,
                    patch: true,
                    popItem: true,
                    pushItem: true,
                    pushManyItems: true,
                    set: true,
                    setAll: true,
                    setItems: true,
                    setMany: true,
                },
            });
        });
    });

    const actions = ac.generateActionsForStore(myStore);
    actions.appState.patch({});
});

function clearMethods(object: any) {
    let memo = {} as any;

    return Object.keys(object).reduce((output, key) => {
        const value = object[key];

        switch (typeof value) {
            case 'function':
                output[key] = true;
                break;
            case 'object':
                output[key] = clearMethods(value);
                break;
            default:
        }

        return output;
    }, memo);
}
