import { generateActionTypesDictionaryForStore } from './actionTypes';
import { analyzeStructure } from './structure';
import { ApiInfo, InfoPredicate, Json } from './types/types';

export const getNodeActions = (
    initialState: Json,
    predicate: InfoPredicate,
    verb: string
) => {
    const actionTypeToInfo =
        generateActionTypesDictionaryForStore<any>(initialState);
    const structure = analyzeStructure(initialState);

    const output: ApiInfo[] = [];

    Object.keys(structure)
        .filter((node) => {
            const nodeType = structure[node];
            return predicate(nodeType);
        })
        .forEach((node) => {
            const info = Object.values(actionTypeToInfo).find((i) => {
                return i.nodeName === node && i.verb === verb;
            });

            if (info) {
                output.push(info);
            }
        });

    return output;
};

export const get = (obj: any, path: string[], defaultValue: any) => {
    let output = obj;

    for (let i = 0; i < path.length; i++) {
        const key = path[i];

        if (key in output === false) {
            return defaultValue;
        }

        output = output[key];
    }

    return output;
};
