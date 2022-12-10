import { IMixerRequest } from '../types';
import { nodeNames } from './mixerInstructions.maps';
import { mergeDeep, get, cloneDeep } from 'shared-base';
// import { merge as mergeDeep } from 'lodash';

export function extractTree(request: IMixerRequest, state: Json) {
    const { source, entityType, itemId } = request;
    let output: Json = {};

    if (!entityType || !itemId) {
        return output;
    }

    const nodeName = get(nodeNames, [source, entityType]) ?? '';
    let value = get(state, [nodeName, itemId]);

    switch (entityType) {
        case 'widgets':
        case 'images':
        case 'instancesProps':
            if (value) {
                output[entityType] = {
                    [itemId]: value,
                };
            }
            return output;
        case 'instances':
            if (!value) {
                return output;
            }

            output[entityType] = {
                [itemId]: value,
            };

            const nodeNameInstancesProps = get(nodeNames, [source, 'instancesProps']) ?? ''; // prettier-ignore

            value = get(state, [nodeNameInstancesProps, itemId]);

            if (!value) {
                return output;
            }

            output['instancesProps'] = {
                [itemId]: value,
            };

            const { widgetId } = value;

            const nodeNameWidgets = get(nodeNames, [source, 'widgets']);

            value = get(state, [nodeNameWidgets, widgetId]);

            if (widgetId && value) {
                output['widgets'] = {
                    [widgetId]: value,
                };
            }

            return output;
    }

    if (entityType === 'pageInstances') {
        output[entityType] = {
            [itemId]: get(state, [nodeName, itemId]),
        };

        const nodeNameInstances = get(nodeNames, [source, 'instances']) ?? '';

        const instances = Object.values(state[nodeNameInstances]).filter(
            (instance: any) => {
                return instance.pageInstanceId === itemId;
            }
        );

        instances.forEach((instance: any) => {
            const { id } = instance;
            output = mergeDeep(
                output,
                extractTree(
                    { ...request, entityType: 'instances', itemId: id },
                    state
                )
            );
        });
    }

    if (entityType === 'pages') {
        output[entityType] = {
            [itemId]: get(state, [nodeName, itemId]),
        };

        const nodeNamePageInstances =
            get(nodeNames, [source, 'pageInstances']) ?? '';

        const pageInstances = Object.values(
            state[nodeNamePageInstances]
        ).filter((pageInstance: any) => {
            return pageInstance.pageId === itemId;
        });

        pageInstances.forEach((pageInstance: any) => {
            const { id } = pageInstance;
            output = mergeDeep(
                output,
                extractTree(
                    { ...request, entityType: 'pageInstances', itemId: id },
                    state
                )
            );
        });
    }

    return cloneDeep(output);
}
