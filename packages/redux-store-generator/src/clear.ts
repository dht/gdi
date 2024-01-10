import { generateActionsForStore } from './actions';
import { get, getNodeActions } from './info';

export const clearStore = (store: any, ignoreNodes: string[] = []) => {
    const actions = generateActionsForStore<any>(store.getState());

    const state = store.getState();

    const collectionSetAllActions = getNodeActions(
        state,
        (nodeType: string) => {
            return nodeType === 'COLLECTION_NODE';
        },
        'setAll'
    );

    for (let apiInfo of collectionSetAllActions) {
        const { verb, nodeName } = apiInfo!;

        const action = get(actions, [nodeName, verb], null);

        if (!action || ignoreNodes.includes(nodeName)) {
            continue;
        }

        store.dispatch(action({}));
    }
};
