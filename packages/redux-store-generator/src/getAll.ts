import { generateActionsForStore } from './actions';
import { get, getNodeActions } from './info';

export const initialFetch = (store: any, ignoreNodes: string[] = []) => {
    const actions = generateActionsForStore<any>(store.getState());

    const state = store.getState();
    const getActions = getNodeActions(state, (i: any) => i, 'get');

    for (let apiInfo of getActions) {
        const { verb, nodeName } = apiInfo!;

        const action = get(actions, [nodeName, verb], null);

        if (!action || ignoreNodes.includes(nodeName)) {
            continue;
        }

        store.dispatch(action({}));
    }
};
