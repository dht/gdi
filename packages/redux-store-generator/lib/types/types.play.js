"use strict";
// import { MyStore } from '../fixtures/store-state';
// import { StoreActions, StoreNodesKeys } from './types';
// type MyActions = StoreActions<MyStore>;
// let x: MyActions = {} as MyActions;
// ============ OK =============
// x.appState.patch({ isLoading: false });
// x.appState.setAll({ isLoading: true, email: '' });
// x.logs.setAll([{ id: '1' }]);
// x.logs.push({ id: '1' });
// x.logs.pop();
// x.logs.clear();
// x.products.add({ id: '1', title: '1' });
// x.products.set('1', { id: '1' });
// x.products.set('1', { id: '1', title: '' });
// x.products.patch('1', { id: '1' });
// x.products.setAll({ '1': { id: '1', title: '' } });
// x.products.delete('1');
// x.chats.get({});
// x.chats.setAll({ '1': { id: '1', title: '', items: [] } });
// x.chats.add({ id: '1', title: '', items: [] });
// x.chats.set('1', { id: '1', title: '', items: [] });
// x.chats.patch('1', { title: '' });
// x.chats.delete('1');
// x.chats.setMany({ '1': { id: '1', title: '', items: [] } });
// x.chats.getItems('1', {});
// x.chats.setItems('1', [{ id: '1', title: '', items: [] }]);
// x.chats.pushItem('1', { id: '1', title: '', items: [] });
// x.chats.popItem('1');
// x.chats.clearItems('1');
// x.chats.pushManyItems('1', [{ id: '1', title: '', items: [] }]);
// ========== PROBLEM ===========
// x.appState.patch({ isLoading: false, u: '' }); // unknown field
// x.appState.setAll({ isLoading: true, u: '' }); // unknown field
// x.logs.setAll([{ id: '1', u: '' }]); // unknown field
// x.logs.push({ id: '1', u: '' }); // unknown field
// x.logs.pop({}); // redundant parameter
// x.logs.clear([]); // redundant parameter
// x.products.add({ title: '', u: '' }); // unknown field
// x.products.set('1', { u: '' }); // missing id
// x.products.patch('1', { u: '' }); // unknown field
// x.products.setAll({ '1': { title: '' } }); // id missing
// x.products.delete(4); // invalid type
// x.chats.get(); // missing parameter
// x.chats.setAll({ '1': { id: '1', title: '', items: [], u: '' } }); // unknown field
// x.chats.add({ id: '1', title: '', items: [], u: '' }); // unknown field
// x.chats.set('1', { id: '1', title: '', items: [], u: '' }); // unknown field
// x.chats.patch('1', { title: '', u: '' }); // unknown field
// x.chats.delete(1); // invalid type
// x.chats.setMany({ '1': { id: '1', title: '', items: [], u: '' } }); // unknown field
// x.chats.getItems('1'); // missing parameter
// x.chats.setItems('1',[{ id: '1', title: '', items: [], u: '' }]); // unknown field
// x.chats.pushItem('1',{ id: '1', title: '', items: [], u: '' }); // unknown field
// x.chats.popItem('1', {}); // redundant parameter
// x.chats.clearItems('1', {}); // redundant parameter
// x.chats.pushManyItems('1', [{ id: '1', title: '', items: [], u: '' }]); // unknown field
