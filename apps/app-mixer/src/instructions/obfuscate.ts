import { Entity, IMixerInstructions } from '../types';
import { guid4 } from 'shared-base';
import get from 'lodash/get';
import set from 'lodash/set';

export function obfuscateInstructions(
    instructions: IMixerInstructions,
    entityTypes: Entity[] = [
        'pages',
        'pageInstances',
        'instances',
        'instancesProps',
        'widgets',
        'images',
    ]
) {
    const output: IMixerInstructions = [];

    let map: Record<string, Record<string, string>> = {};
    let newId = '',
        key = '';

    instructions.forEach((instruction) => {
        let newInstruction = { ...instruction };
        const { nodeName, data, entityType } = instruction;

        const { id, pageId, pageInstanceId, widgetId } = data;

        const shouldTranslateCore = entityTypes.includes(entityType);

        if (shouldTranslateCore && entityType !== 'instancesProps') {
            newId = get(map, [nodeName, id]) ?? guid4();
            set(map, [nodeName, id], newId);
            newInstruction.data.id = newId;
        }

        if (shouldTranslateCore && entityType === 'instancesProps') {
            key = nodeName.includes('library')
                ? 'libraryInstances'
                : 'instances';

            newId = get(map, [key, id]) ?? guid4();
            set(map, [nodeName, id], newId);
            newInstruction.data.id = newId;
        }

        if (pageId && entityTypes.includes('pages')) {
            key = nodeName.includes('library') ? 'libraryPages' : 'pages';
            newId = get(map, [key, pageId]) ?? guid4();
            set(map, [key, pageId], newId);
            newInstruction.data.pageId = newId;
        }

        if (pageInstanceId && entityTypes.includes('pageInstances')) {
            key = nodeName.includes('library') ? 'libraryPageInstances' : 'pageInstances'; // prettier-ignore
            newId = get(map, [key, pageInstanceId]) ?? guid4();
            set(map, [key, pageInstanceId], newId);
            newInstruction.data.pageInstanceId = newId;
        }

        if (widgetId && entityTypes.includes('widgets')) {
            key = nodeName.includes('library') ? 'libraryWidgets' : 'widgets';
            newId = get(map, [key, widgetId]) ?? guid4();
            set(map, [key, widgetId], newId);
            newInstruction.data.widgetId = newId;
        }

        output.push(newInstruction);
    });

    return output;
}
