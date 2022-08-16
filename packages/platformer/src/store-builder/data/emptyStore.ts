import { createStore } from 'redux';

const reducer = (state: any) => state;

export const emptyStore = createStore(reducer) as any;
