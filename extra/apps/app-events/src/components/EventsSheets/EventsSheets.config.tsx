export const nodes: INodeWithColor[] = [
    {
        id: 'events',
        store: 'events',
        nodeType: 'collection',
        fieldTypes: {
            name: 'string',
            date: 'date',
            location: 'string',
            rating: 'number',
            description: 'string',
            link: 'string',
            googleEventId: 'string',
        },
        color: '#911eb4',
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
