import { generateActionsForStore } from 'redux-store-generator';
import { initialState } from './initialState.iso';
import { IIsoStore } from './types.iso';

const DEBUG = false;
const specialDebugger = ['sceneVASPs', 'setAll'];

export const actions = generateActionsForStore<IIsoStore>(initialState);

// add proxy

const methodInterceptor = (key: string, methodName: string) => ({
  apply: function (target: any, thisArg: any, argumentsList: any) {
    const methodStr = `${key}.${methodName}()`;

    if (key === specialDebugger[0] && methodName === specialDebugger[1]) {
      console.log('methodStr =>', methodStr, argumentsList[0]);
      //   debugger;
    }

    return target(...argumentsList);
  },
});

function wrapMethodsInProxy(obj: any) {
  Object.keys(obj).forEach((key) => {
    const node = obj[key];
    Object.keys(node).forEach((methodName) => {
      if (typeof node[methodName] === 'function') {
        node[methodName] = new Proxy(node[methodName], methodInterceptor(key, methodName));
      }
    });
  });
}

if (DEBUG) {
  wrapMethodsInProxy(actions);
}
