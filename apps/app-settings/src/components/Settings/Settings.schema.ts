// source: https://github.com/rcorp/css-schema

type IJsonSchema = {
    uri: string;
    fileMatch?: string[];
    schema?: Json;
};

export const settingsSchema: IJsonSchema = {
    uri: 'http://myserver/settings.json', //
    fileMatch: ['*'],
    schema: {
        $schema: 'http://json-schema.org/draft-04/schema#',
        title: 'Settings Schema',
        type: 'object',
        definitions: {
            Apps: {
                type: 'object',
                additionalProperties: false,
                properties: {
                    tasks: {
                        type: 'boolean',
                    },
                    mixer: {
                        type: 'boolean',
                    },
                    factory: {
                        type: 'boolean',
                    },
                },
                title: 'Apps',
            },
            General: {
                type: 'object',
                additionalProperties: false,
                properties: {
                    backgroundColor: {
                        type: 'string',
                    },
                },
                title: 'General',
            },
        },
        additionalProperties: false,
        properties: {
            apps: {
                $ref: '#/definitions/Apps',
            },
            general: {
                $ref: '#/definitions/General',
            },
        },
    },
};

export default settingsSchema;
