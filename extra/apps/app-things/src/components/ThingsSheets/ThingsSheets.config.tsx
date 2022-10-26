export const nodes: INodeWithColor[] = [
    {
        id: 'things',
        store: 'things',
        nodeType: 'collection',
        fieldTypes: {
            name: 'string',
            description: 'string',
        },
        color: '#e6194B',
    },
];

export const allConfigs = nodes.reduce((output, node) => {
    const { id, fieldTypes } = node;

    const fields = Object.keys(fieldTypes).map((key) => {
        const value = fieldTypes[key];

        return {
            id: key,
            fieldType: value,
            label: key,
            groupId: 'basic',
        };
    });

    output[id] = {
        id,
        sequence: 1,
        layout: {
            flavour: 'singleColumn',
        },
        groups: [],
        fields,
        submit: {
            title: 'Save & close',
        },
    } as IFormConfig;

    return output;
}, {} as Record<string, IFormConfig>);
