type IJsonSchema = {
    uri: string;
    fileMatch?: string[];
    schema?: Json;
};

export const sitePropertiesSchema: IJsonSchema = {
    uri: 'http://myserver/siteProperties.json', //
    fileMatch: ['*'],
    schema: {
        $schema: 'http://json-schema.org/draft-04/schema#',
        title: 'SiteProperties Schema',
        type: 'object',
        definitions: {
            MetaTag: {
                type: 'object',
                additionalProperties: false,
                properties: {
                    name: {
                        type: 'string',
                        title: 'name',
                        enum: [
                            'author',
                            'description',
                            'keywords',
                            'og:title',
                            'og:url',
                            'og:description',
                            'og:image',
                            'twitter:title',
                            'twitter:site',
                            'twitter:creator',
                            'twitter:description',
                            'twitter:image',
                            'robots',
                            'language',
                            'viewport',
                        ],
                    },
                    content: {
                        oneOf: [
                            {
                                type: 'array',
                                items: {
                                    type: 'string',
                                },
                            },
                            {
                                type: 'string',
                            },
                        ],
                    },
                },
                required: ['name', 'content'],
                title: 'MetaTag',
            },
            LinkTag: {
                type: 'object',
                additionalProperties: false,
                properties: {
                    href: {
                        type: 'string',
                    },
                    rel: {
                        type: 'string',
                    },
                    type: {
                        type: 'string',
                    },
                    media: {
                        type: 'string',
                    },
                    title: {
                        type: 'string',
                    },
                    sizes: {
                        type: 'string',
                    },
                },
                required: ['href', 'rel'],
                title: 'LinkTag',
            },
        },
        additionalProperties: false,
        properties: {
            title: {
                type: 'string',
            },
            metaTags: {
                type: 'array',
                items: {
                    $ref: '#/definitions/MetaTag',
                },
            },
            linkTags: {
                type: 'array',
                items: {
                    $ref: '#/definitions/LinkTag',
                },
            },
        },
        require: ['title'],
    },
};

export default sitePropertiesSchema;
