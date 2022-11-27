import {
    IMixerInstruction,
    IMixerInstructions,
    IMixerRequest,
    Entity,
    SourceDestination,
} from '../types';
import { extractTree } from './extractTree';
import { nodeNames } from './mixerInstructions.maps';
import { obfuscateInstructions } from './obfuscate';
import get from 'lodash/get';
import { actions } from '../store';

export const parseMixerRequest = (
    request: IMixerRequest,
    state: Json,
    checkNeedToObfuscate?: boolean
) => {
    const output: IMixerInstructions = [];

    const { source, destination, data = {} } = request;

    let index = 1;
    let inData = data;

    if (['site', 'library'].includes(source)) {
        inData = extractTree(request, state);
        delete inData['libraryWidgets'];
        delete inData['widgets'];
    }

    Object.keys(inData).forEach((key) => {
        const value = inData[key];

        const nodeName = get(nodeNames, [destination, key]);

        Object.keys(value).forEach((id) => {
            const instruction: IMixerInstruction = {
                id: String(index++),
                entityType: key as Entity,
                type: 'create',
                nodeName,
                data: value[id],
            };
            output.push(instruction);
        });
    });

    let obfuscate = false,
        obfuscateEntities: Entity[] = [
            'pages',
            'pageInstances',
            'instances',
            'instancesProps',
        ];

    if (checkNeedToObfuscate) {
        if (
            (source === 'library' && destination === 'library') ||
            (source === 'template' && destination === 'library')
        ) {
            obfuscate = true;
        }

        if (source === 'json') {
            obfuscate = true;
            obfuscateEntities.push('images', 'widgets');
        }
    }

    return obfuscate
        ? obfuscateInstructions(output, obfuscateEntities)
        : output;
};

export const parseMixerRequestToActions = (
    request: IMixerRequest,
    state: Json,
    checkNeedToObfuscate?: boolean
) => {
    const instructions = parseMixerRequest(
        request,
        state,
        checkNeedToObfuscate
    );

    return instructionsToActions(instructions);
};

export const instructionsToActions = (instructions: IMixerInstructions) => {
    return instructions.map((item) => {
        const { nodeName, type } = item;
        const group: any = actions[nodeName];

        switch (type) {
            case 'create':
                return group.add(item.data);
            case 'update':
                return group.update(item.data.id, item.data);
            case 'delete':
                return group.delete(item.data.id);
        }
    });
};

export const parseDeleteInstructions = (
    source: SourceDestination,
    data: Json
) => {
    const output: IMixerInstructions = [];
    let index = 1;

    Object.keys(data).forEach((key) => {
        const nodeName = get(nodeNames, [source, key]);
        const items = data[key];

        Object.values(items).forEach((item: any) => {
            const instruction: IMixerInstruction = {
                id: String(index++),
                entityType: key as Entity,
                type: 'delete',
                nodeName,
                data: {
                    id: item.id,
                },
            };
            output.push(instruction);
        });
    });

    return output;
};

export const parseDeleteInstructionsToActions = (
    source: SourceDestination,
    data: Json
) => {
    const instructions = parseDeleteInstructions(source, data);
    return instructionsToActions(instructions);
};
