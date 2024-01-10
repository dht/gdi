import {
    collection_actionTypes,
    generateActionTypesForStore,
    generateActionTypesDictionaryForStore,
    queue_actionTypes,
    single_actionTypes,
    groupedList_actionTypes,
} from './actionTypes';
import myStore from './fixtures/store-state';

describe('api', () => {
    it('should generate actionTypes for single', () => {
        const result = single_actionTypes('appState');
        expect(result).toEqual({
            get: 'GET_APPSTATE',
            patch: 'PATCH_APPSTATE',
            setAll: 'SET_APPSTATE',
        });
    });

    it('should generate actionTypes for queue', () => {
        const result = queue_actionTypes('logs');
        expect(result).toEqual({
            clear: 'CLEAR_LOGS',
            get: 'GET_LOGS',
            pop: 'POP_LOG',
            push: 'PUSH_LOG',
            setAll: 'SET_LOGS',
        });
    });

    it('should generate actionTypes for collection', () => {
        const result = collection_actionTypes('products');
        expect(result).toEqual({
            add: 'ADD_PRODUCT',
            delete: 'DELETE_PRODUCT',
            get: 'GET_PRODUCTS',
            patch: 'PATCH_PRODUCT',
            set: 'SET_PRODUCT',
            setAll: 'SET_PRODUCTS',
        });
    });

    it('should generate actionTypes for groupedList', () => {
        const result = groupedList_actionTypes('chats');
        expect(result).toEqual({
            add: 'ADD_CHAT',
            clearItems: 'CLEAR_CHATS_ITEMS',
            delete: 'DELETE_CHAT',
            get: 'GET_CHATS',
            getItems: 'GET_CHATS_ITEMS',
            patch: 'PATCH_CHAT',
            popItem: 'POP_CHATS_ITEM',
            pushItem: 'PUSH_CHATS_ITEM',
            pushManyItems: 'PUSH_MANY_CHATS_ITEMS',
            set: 'SET_CHAT',
            setAll: 'SET_CHATS',
            setItems: 'SET_CHATS_ITEMS',
        });
    });

    it('should generate actionTypes for store', () => {
        const result = generateActionTypesForStore(myStore);
        expect(result).toEqual({
            appState: {
                get: 'GET_APPSTATE',
                patch: 'PATCH_APPSTATE',
                setAll: 'SET_APPSTATE',
            },
            logs: {
                clear: 'CLEAR_LOGS',
                get: 'GET_LOGS',
                pop: 'POP_LOG',
                push: 'PUSH_LOG',
                setAll: 'SET_LOGS',
            },
            products: {
                add: 'ADD_PRODUCT',
                delete: 'DELETE_PRODUCT',
                get: 'GET_PRODUCTS',
                patch: 'PATCH_PRODUCT',
                set: 'SET_PRODUCT',
                setAll: 'SET_PRODUCTS',
            },
            chats: {
                add: 'ADD_CHAT',
                delete: 'DELETE_CHAT',
                get: 'GET_CHATS',
                patch: 'PATCH_CHAT',
                set: 'SET_CHAT',
                setAll: 'SET_CHATS',
                getItems: 'GET_CHATS_ITEMS',
                setItems: 'SET_CHATS_ITEMS',
                popItem: 'POP_CHATS_ITEM',
                pushItem: 'PUSH_CHATS_ITEM',
                clearItems: 'CLEAR_CHATS_ITEMS',
                pushManyItems: 'PUSH_MANY_CHATS_ITEMS',
            },
        });
    });

    it('should generate actionTypes dictionary for store', () => {
        const result = generateActionTypesDictionaryForStore(myStore);
        expect(result).toEqual(
            {
            ADD_CHAT: { nodeName: 'chats', verb: 'add' },  // prettier-ignore
            ADD_PRODUCT: { nodeName: 'products', verb: 'add' }, // prettier-ignore
            CLEAR_CHATS_ITEMS: { nodeName: 'chats', verb: 'clearItems' }, // prettier-ignore
            CLEAR_LOGS: { nodeName: 'logs', verb: 'clear' }, // prettier-ignore
            DELETE_CHAT: { nodeName: 'chats', verb: 'delete' }, // prettier-ignore
            DELETE_PRODUCT: { nodeName: 'products', verb: 'delete' }, // prettier-ignore
            GET_APPSTATE: { isGet: true, nodeName: 'appState', verb: 'get' }, // prettier-ignore
            GET_CHATS: { isGet: true, nodeName: 'chats', verb: 'get' }, // prettier-ignore
            GET_CHATS_ITEMS: { nodeName: 'chats', verb: 'getItems' }, // prettier-ignore
            GET_LOGS: { isGet: true, nodeName: 'logs', verb: 'get' }, // prettier-ignore
            GET_PRODUCTS: { isGet: true, nodeName: 'products', verb: 'get' }, // prettier-ignore
            PATCH_APPSTATE: { nodeName: 'appState', verb: 'patch' }, // prettier-ignore
            PATCH_CHAT: { nodeName: 'chats', verb: 'patch' }, // prettier-ignore
            PATCH_PRODUCT: { nodeName: 'products', verb: 'patch' }, // prettier-ignore
            POP_CHATS_ITEM: { nodeName: 'chats', verb: 'popItem' }, // prettier-ignore
            POP_LOG: { nodeName: 'logs', verb: 'pop' }, // prettier-ignore
            PUSH_CHATS_ITEM: { nodeName: 'chats', verb: 'pushItem' }, // prettier-ignore
            PUSH_LOG: { nodeName: 'logs', verb: 'push' }, // prettier-ignore
            PUSH_MANY_CHATS_ITEMS: { isLocal: true, nodeName: 'chats', verb: 'pushManyItems' }, // prettier-ignore
            SET_APPSTATE: { isLocal: true, nodeName: 'appState', verb: 'setAll' }, // prettier-ignore
            SET_CHAT: { isLocal: true, nodeName: 'chats', verb: 'set' }, // prettier-ignore
            SET_CHATS: { isLocal: true, nodeName: 'chats', verb: 'setAll' }, // prettier-ignore
            SET_CHATS_ITEMS: { isLocal: true, nodeName: 'chats', verb: 'setItems' }, // prettier-ignore
            SET_LOGS: { isLocal: true, nodeName: 'logs', verb: 'setAll' }, // prettier-ignore
            SET_PRODUCT: { isLocal: true, nodeName: 'products', verb: 'set' }, // prettier-ignore
            SET_PRODUCTS: { isLocal: true, nodeName: 'products', verb: 'setAll' } } // prettier-ignore
        );
    });
});
