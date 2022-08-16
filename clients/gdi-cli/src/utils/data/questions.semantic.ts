import { Questions } from '../prompt';

export const questionsSemantic: (scopes: string[]) => Questions = (
    scopes: string[]
) => [
    {
        name: 'type',
        message: 'type',
        type: 'AutoComplete',
        selectedId: 'infra',
        choices: [
            {
                id: 'infra',
                label: 'infra',
            },
            {
                id: 'feat',
                label: 'feat',
            },
            {
                id: 'fix',
                label: 'fix',
            },
        ],
    },
    {
        name: 'scope',
        message: 'scope',
        type: 'AutoComplete',
        selectedId: scopes[0],
        choices: scopes.map((scope) => ({
            id: scope,
            label: scope,
        })),
        limit: 10,
    },
    {
        name: 'summary',
        message: 'short summary',
        type: 'Input',
    },
];
