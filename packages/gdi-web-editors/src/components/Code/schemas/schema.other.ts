import { Schema } from '../Code';

export const schema: Schema[] = [
    {
        uri: 'http://myserver/foo-schema.json', // id of the first schema
        fileMatch: ['*'], // associate with our model
        schema: {
            type: 'object',
            properties: {
                p1: {
                    enum: ['v1', 'v2'],
                },
                p2: {
                    $ref: 'http://myserver/bar-schema.json', // reference the second schema
                },
            },
        },
    },
    {
        uri: 'http://myserver/bar-schema.json', // id of the second schema
        schema: {
            type: 'object',
            properties: {
                q1: {
                    enum: ['x1', 'x2'],
                },
            },
        },
    },
];

export default schema;
