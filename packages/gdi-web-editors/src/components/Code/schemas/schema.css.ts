import { Schema } from '../Code';

// source: https://github.com/rcorp/css-schema

export const schema: Schema = {
    uri: 'http://myserver/foo-schema.json', // id of the first schema
    fileMatch: ['*'], // associate with our model
    schema: {
        $schema: 'http://json-schema.org/draft-04/schema#',
        title: 'CSS Schema',
        definitions: {
            length: {
                type: 'object',
                properties: {
                    value: {
                        type: 'integer',
                        default: '2',
                    },
                    unit: {
                        type: 'string',
                        enum: ['px', 'em', '%'],
                        default: 'px',
                    },
                },
            },
            time: {
                type: 'object',
                properties: {
                    value: {
                        type: 'integer',
                        default: '2',
                    },
                    unit: {
                        type: 'string',
                        enum: ['s', 'ms'],
                        default: 's',
                    },
                },
            },
            overflow: {
                type: 'object',
                properties: {
                    value: {
                        type: 'string',
                        enum: ['visible', 'scroll', 'hidden', 'auto'],
                        required: true,
                    },
                },
            },
            'translation-value': {
                type: 'object',
                properties: {
                    value: {
                        type: 'integer',
                        default: '2',
                    },
                },
            },
            btrr: {
                oneOf: [
                    {
                        title: 'radius',
                        $ref: '#/definitions/length',
                    },
                    {
                        type: 'string',
                        enum: ['0'],
                        required: true,
                    },
                ],
            },
            border: {
                type: 'object',
                properties: {
                    unit: {
                        type: 'string',
                        enum: [
                            'none',
                            'solid',
                            'ridge',
                            'outset',
                            'inset',
                            'hidden',
                            'groove',
                            'double',
                            'dotted',
                            'dashed',
                        ],
                        default: 'none',
                    },
                },
            },
            'border-width': {
                type: 'object',
                properties: {
                    value: {
                        type: 'string',
                        enum: ['medium', 'thin', 'thick'],
                        required: true,
                    },
                },
            },
        },
        type: 'object',
        properties: {
            'animation-iteration-count': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['1', 'infinite'],
                        required: true,
                    },
                    {
                        type: 'number',
                    },
                ],
            },
            'animation-name': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['none'],
                        required: true,
                    },
                    {
                        type: 'string',
                        title: 'custom identifier',
                    },
                ],
            },
            'animation-timing-function': {
                oneOf: [
                    {
                        type: 'string',
                        title: 'animation-timing-function',
                        enum: [
                            'ease',
                            'step-start',
                            'step-end',
                            'linear',
                            'ease-out',
                            'ease-in-out',
                            'ease-in',
                        ],
                        required: true,
                    },
                    {
                        type: 'object',
                        title: 'cubic-bezier',
                        properties: {
                            number1: {
                                type: 'string',
                            },
                            number2: {
                                type: 'string',
                            },
                            number3: {
                                type: 'string',
                            },
                            number4: {
                                type: 'string',
                            },
                        },
                    },
                    {
                        type: 'string',
                        title: 'steps',
                        enum: ['start', 'end'],
                        required: true,
                    },
                ],
            },
            integer: {
                type: 'integer',
            },
            'border-radius': {
                $ref: '#/definitions/length',
            },
            'border-style': {
                $ref: '#/definitions/border',
            },
            'border-top-style': {
                $ref: '#/definitions/border',
            },
            'border-right-style': {
                $ref: '#/definitions/border',
            },
            'border-bottom-style': {
                $ref: '#/definitions/border',
            },
            'border-left-style': {
                $ref: '#/definitions/border',
            },
            'border-width': {
                $ref: '#/definitions/border-width',
            },
            'border-top-width': {
                $ref: '#/definitions/border-width',
            },
            'border-right-width': {
                $ref: '#/definitions/border-width',
            },
            'border-bottom-width': {
                $ref: '#/definitions/border-width',
            },
            'border-left-width': {
                $ref: '#/definitions/border-width',
            },
            color: {
                type: 'string',
                format: 'color',
            },
            'background-image': {},
            'background-size': {
                oneOf: [
                    {
                        type: 'string',
                        title: 'background-size',
                        enum: ['auto', 'cover', 'contain'],
                        required: true,
                    },
                ],
            },
            'background-position': {},
            'border-color': {
                type: 'string',
                format: 'color',
            },
            top: {
                oneOf: [
                    {
                        $ref: '#/definitions/length',
                    },
                    {
                        type: 'string',
                        enum: ['auto'],
                        required: true,
                    },
                ],
            },
            'border-top-color': {
                oneOf: [
                    {
                        type: 'string',
                        format: 'color',
                    },
                    {
                        type: 'string',
                        enum: ['transparent'],
                        required: true,
                    },
                ],
            },
            right: {
                oneOf: [
                    {
                        $ref: '#/definitions/length',
                    },
                    {
                        type: 'string',
                        enum: ['auto'],
                        required: true,
                    },
                ],
            },
            'border-right-color': {
                oneOf: [
                    {
                        type: 'string',
                        format: 'color',
                    },
                    {
                        type: 'string',
                        enum: ['transparent'],
                        required: true,
                    },
                ],
            },
            bottom: {
                oneOf: [
                    {
                        $ref: '#/definitions/length',
                    },
                    {
                        type: 'string',
                        enum: ['auto'],
                        required: true,
                    },
                ],
            },
            'border-bottom-color': {
                oneOf: [
                    {
                        type: 'string',
                        format: 'color',
                    },
                    {
                        type: 'string',
                        enum: ['transparent'],
                        required: true,
                    },
                ],
            },
            left: {
                oneOf: [
                    {
                        $ref: '#/definitions/length',
                    },
                    {
                        type: 'string',
                        enum: ['auto'],
                        required: true,
                    },
                ],
            },
            'border-left-color': {
                oneOf: [
                    {
                        type: 'string',
                        format: 'color',
                    },
                    {
                        type: 'string',
                        enum: ['transparent'],
                        required: true,
                    },
                ],
            },
            'border-top-left-radius': {
                $ref: '#/definitions/btrr',
            },
            'border-top-right-radius': {
                $ref: '#/definitions/btrr',
            },
            'border-bottom-left-radius': {
                $ref: '#/definitions/btrr',
            },
            'border-bottom-right-radius': {
                $ref: '#/definitions/btrr',
            },

            'border-image-source': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['none'],
                        required: true,
                    },
                    {
                        title: 'url',
                        type: 'string',
                    },
                ],
            },
            'border-image-slice': {
                type: 'object',
                properties: {
                    value: {
                        type: 'integer',
                        default: '100',
                    },
                    unit: {
                        type: 'string',
                        enum: ['%'],
                        required: true,
                    },
                },
            },
            width: {
                oneOf: [
                    {
                        $ref: '#/definitions/length',
                    },
                    {
                        type: 'string',
                        enum: ['auto'],
                        required: true,
                    },
                ],
            },
            'border-image-width': {
                type: 'integer',
            },
            'border-image-outset': {
                type: 'integer',
            },
            'border-spacing': {
                type: 'array',
                format: 'table',
                title: 'border-spacing',
                uniqueItems: true,
                items: {
                    type: 'object',
                    title: 'border-spacing',
                    properties: {
                        first: {
                            $ref: '#/definitions/length',
                        },
                        second: {
                            $ref: '#/definitions/length',
                        },
                    },
                },
            },
            clip: {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['auto'],
                        required: true,
                    },
                    {
                        type: 'array',
                        format: 'table',
                        title: 'rect',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'rect',
                            properties: {
                                length1: {
                                    $ref: '#/definitions/length',
                                },
                                length2: {
                                    $ref: '#/definitions/length',
                                },
                                length3: {
                                    $ref: '#/definitions/length',
                                },
                                length4: {
                                    $ref: '#/definitions/length',
                                },
                            },
                        },
                    },
                    {
                        type: 'array',
                        format: 'table',
                        title: 'inset',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'inset',
                            properties: {
                                length1: {
                                    $ref: '#/definitions/length',
                                },
                                length2: {
                                    $ref: '#/definitions/length',
                                },
                                length3: {
                                    $ref: '#/definitions/length',
                                },
                                length4: {
                                    $ref: '#/definitions/length',
                                },
                            },
                        },
                    },
                ],
            },
            'column-width': {
                oneOf: [
                    {
                        $ref: '#/definitions/length',
                    },
                    {
                        type: 'string',
                        enum: ['auto'],
                        required: true,
                    },
                ],
            },
            'column-count': {
                oneOf: [
                    {
                        type: 'integer',
                    },
                    {
                        type: 'string',
                        enum: ['auto'],
                        required: true,
                    },
                ],
            },
            'column-gap': {
                oneOf: [
                    {
                        $ref: '#/definitions/length',
                    },
                    {
                        type: 'string',
                        enum: ['normal'],
                        required: true,
                    },
                ],
            },

            'column-rule-color': {
                type: 'string',
                format: 'color',
            },

            'column-rule-width': {
                oneOf: [
                    {
                        title: 'crw',
                        type: 'string',
                        enum: ['medium', 'thin', 'thick'],
                        required: true,
                    },
                    {
                        title: 'length',
                        $ref: '#/definitions/length',
                    },
                ],
            },

            content: {
                oneOf: [
                    {
                        title: 'content',
                        type: 'string',
                        enum: [
                            'normal',
                            'open-quote',
                            'none',
                            'no-open-quote',
                            'no-close-quote',
                            'icon',
                            'close-quote',
                        ],
                        required: true,
                    },
                    {
                        title: ' identifier',
                        type: 'string',
                    },
                    {
                        title: ' url',
                        type: 'string',
                    },
                    {
                        title: ' counter',
                        type: 'string',
                    },
                ],
            },
            'counter-increment': {
                oneOf: [
                    {
                        title: 'counter-increment',
                        type: 'string',
                        enum: ['none'],
                        required: true,
                    },
                    {
                        title: ' identifier',
                        type: 'string',
                    },
                    {
                        title: ' integer',
                        type: 'integer',
                    },
                ],
            },
            'counter-reset': {
                oneOf: [
                    {
                        title: 'counter-increment',
                        type: 'string',
                        enum: ['none'],
                        required: true,
                    },
                    {
                        title: ' identifier',
                        type: 'string',
                    },
                    {
                        title: ' integer',
                        type: 'integer',
                    },
                ],
            },
            cursor: {
                oneOf: [
                    {
                        title: 'cursor',
                        type: 'string',
                        enum: [
                            'auto',
                            'zoom-out',
                            'zoom-in',
                            'wait',
                            'w-resize',
                            'vertical-text',
                            'text',
                            'sw-resize',
                            'se-resize',
                            's-resize',
                            'row-resize',
                            'progress',
                            'pointer',
                            'nwse-resize',
                            'nw-resize',
                            'ns-resize',
                            'not-allowed',
                            'none',
                            'no-drop',
                            'nesw-resize',
                            'ne-resize',
                            'n-resize',
                            'move',
                            'help',
                            'ew-resize',
                            'e-resize',
                            'default',
                            'crosshair',
                            'copy',
                            'context-menu',
                            'col-resize',
                            'cell',
                            'all-scroll',
                            'alias',
                        ],
                        required: true,
                    },
                    {
                        title: 'url',
                        type: 'string',
                    },
                ],
            },

            'flex-grow': {
                type: 'integer',
            },
            'flex-shrink': {
                type: 'integer',
                default: '1',
            },
            'flex-basis': {
                oneOf: [
                    {
                        $ref: '#/definitions/length',
                    },
                    {
                        type: 'string',
                        enum: ['auto'],
                        required: true,
                    },
                ],
            },

            'font-family': {
                type: 'string',
            },
            'font-size': {
                oneOf: [
                    {
                        title: 'font-size',
                        type: 'string',
                        enum: [
                            'medium',
                            'xx-small',
                            'xx-large',
                            'x-small',
                            'x-large',
                            'smaller',
                            'small',
                            'larger',
                            'large',
                        ],
                        required: true,
                    },
                    {
                        title: 'size',
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'font-size-adjust': {
                type: 'string',
                default: 'none',
            },
            height: {
                oneOf: [
                    {
                        title: 'height',
                        type: 'string',
                        enum: ['auto'],
                        required: true,
                    },
                    {
                        type: 'object',
                        properties: {
                            length: {
                                type: 'integer',
                                default: '2',
                            },
                            percentage: {
                                type: 'string',
                                enum: ['%'],
                                required: true,
                            },
                        },
                    },
                ],
            },
            icon: {
                type: 'string',
                default: 'auto',
            },
            'image-orientation': {
                oneOf: [
                    {
                        type: 'object',
                        properties: {
                            value: {
                                type: 'integer',
                                default: '1',
                            },
                            unit: {
                                type: 'string',
                                enum: ['deg', 'grad', 'rad', 'turn'],
                                required: true,
                            },
                        },
                    },
                ],
            },
            'letter-spacing': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['normal'],
                        required: true,
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'line-height': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['normal'],
                        required: true,
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                ],
            },

            'list-style-image': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['none'],
                        required: true,
                    },
                    {
                        title: 'url',
                        type: 'string',
                    },
                ],
            },
            'max-height': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['none'],
                        required: true,
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'max-width': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['none'],
                        required: true,
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'min-height': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['0', 'auto'],
                        required: true,
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'min-width': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['0', 'auto'],
                        required: true,
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'object-position': {
                oneOf: [
                    {
                        type: 'array',
                        format: 'table',
                        title: 'object-position',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'object-position',
                            properties: {
                                first: {
                                    type: 'string',
                                    enum: ['50%', 'right ', 'left ', 'center '],
                                    required: true,
                                },
                                second: {
                                    type: 'string',
                                    enum: ['50%', 'bottom', 'top', 'center '],
                                    required: true,
                                },
                            },
                        },
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                ],
            },
            opacity: {
                type: 'integer',
                default: '1',
            },
            orphans: {
                type: 'integer',
                default: '2',
            },
            'outline-color': {
                oneOf: [
                    {
                        title: 'invert',
                        type: 'string',
                        enum: ['invert'],
                        required: true,
                    },
                    {
                        type: 'string',
                        format: 'color',
                    },
                ],
            },
            'outline-offset': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['0'],
                        required: true,
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'outline-width': {
                oneOf: [
                    {
                        title: 'crw',
                        type: 'string',
                        enum: ['medium', 'thin', 'thick'],
                        required: true,
                    },
                    {
                        title: 'length',
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'padding-top': {
                oneOf: [
                    {
                        title: 'padding-top',
                        type: 'string',
                        enum: ['0'],
                        required: true,
                    },
                    {
                        title: 'padding-top',
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'padding-bottom': {
                oneOf: [
                    {
                        title: 'padding-top',
                        type: 'string',
                        enum: ['0'],
                        required: true,
                    },
                    {
                        title: 'padding-top',
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'padding-left': {
                oneOf: [
                    {
                        title: 'padding-top',
                        type: 'string',
                        enum: ['0'],
                        required: true,
                    },
                    {
                        title: 'padding-top',
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'padding-right': {
                oneOf: [
                    {
                        title: 'padding-top',
                        type: 'string',
                        enum: ['0'],
                        required: true,
                    },
                    {
                        title: 'padding-top',
                        $ref: '#/definitions/length',
                    },
                ],
            },
            perspective: {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['none'],
                        required: true,
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'perspective-origin': {
                oneOf: [
                    {
                        type: 'array',
                        format: 'table',
                        title: 'perspective-origin',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'perspective-origin',
                            properties: {
                                first: {
                                    type: 'string',
                                    enum: [
                                        '50%',
                                        'top',
                                        'right',
                                        'left',
                                        'center',
                                        'bottom',
                                    ],
                                    required: true,
                                },
                                second: {
                                    type: 'string',
                                    enum: ['50%'],
                                    required: true,
                                },
                            },
                        },
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                ],
            },
            quotes: {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['none'],
                        required: true,
                    },
                    {
                        type: 'array',
                        format: 'table',
                        title: 'quotes',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'quotes',
                            properties: {
                                first: {
                                    type: 'string',
                                },
                                second: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                ],
            },
            'tab-size': {
                oneOf: [
                    {
                        title: 'tab-size',
                        type: 'integer',
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                    {
                        title: 'Integer',
                        type: 'integer',
                    },
                ],
            },
            'text-align': {
                oneOf: [
                    {
                        title: 'text-align',
                        type: 'string',
                        enum: [
                            'start',
                            'right',
                            'left',
                            'match-parent',
                            'justify',
                            'end',
                            'center',
                        ],
                        required: true,
                    },
                    {
                        title: 'String',
                        type: 'string',
                    },
                ],
            },
            'text-emphasis-style': {
                oneOf: [
                    {
                        type: 'string',
                        enum: [
                            'none',
                            'triangle',
                            'sesame',
                            'open',
                            'filled',
                            'double-circle',
                            'dot',
                            'circle',
                        ],
                        required: true,
                    },
                    {
                        title: 'String',
                        type: 'string',
                    },
                ],
            },
            'text-emphasis-color': {
                type: 'string',
                format: 'color',
            },
            'text-indent': {
                oneOf: [
                    {
                        title: 'text-indent',
                        type: 'string',
                        enum: ['0'],
                        required: true,
                    },
                    {
                        title: 'percentage',
                        type: 'string',
                        enum: ['%'],
                        required: true,
                    },
                    {
                        type: 'array',
                        format: 'table',
                        title: 'hanging each-line',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'hanging each-line',
                            properties: {
                                length: {
                                    $ref: '#/definitions/length',
                                },
                                hanging: {
                                    type: 'string',
                                    enum: ['hanging'],
                                    required: true,
                                },
                                'each-line': {
                                    type: 'string',
                                    enum: ['each-line'],
                                    required: true,
                                },
                            },
                        },
                    },
                    {
                        type: 'array',
                        format: 'table',
                        title: 'hanging',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'hanging',
                            properties: {
                                length: {
                                    $ref: '#/definitions/length',
                                },
                                hanging: {
                                    type: 'string',
                                    enum: ['hanging'],
                                    required: true,
                                },
                            },
                        },
                    },
                    {
                        type: 'array',
                        format: 'table',
                        title: 'each-line',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'each-line',
                            properties: {
                                length: {
                                    $ref: '#/definitions/length',
                                },
                                'each-line': {
                                    type: 'string',
                                    enum: ['each-line'],
                                    required: true,
                                },
                            },
                        },
                    },
                    {
                        title: 'length',
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'text-combine-horizontal': {
                oneOf: [
                    {
                        title: 'text-combine-horizontal',
                        type: 'string',
                        enum: ['none', 'all'],
                        required: true,
                    },
                    {
                        title: 'digits',
                        type: 'integer',
                    },
                ],
            },
            'text-overflow': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['clip', 'ellipsis'],
                        required: true,
                    },
                    {
                        title: 'String',
                        type: 'string',
                    },
                ],
            },
            transform: {
                oneOf: [
                    {
                        title: 'String',
                        type: 'string',
                        enum: ['none'],
                        required: true,
                    },
                    {
                        title: 'translateZ',
                        $ref: '#/definitions/length',
                    },
                    {
                        title: 'translateY',
                        $ref: '#/definitions/translation-value',
                    },
                    {
                        title: 'translateX',
                        $ref: '#/definitions/translation-value',
                    },
                    {
                        type: 'array',
                        format: 'table',
                        title: 'translate3d',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'translate3d',
                            properties: {
                                'translation-value1': {
                                    $ref: '#/definitions/translation-value',
                                },
                                'translation-value2': {
                                    $ref: '#/definitions/translation-value',
                                },
                                length: {
                                    $ref: '#/definitions/length',
                                },
                            },
                        },
                    },
                    {
                        type: 'array',
                        format: 'table',
                        title: 'translate',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'translate',
                            properties: {
                                'translation-value1': {
                                    $ref: '#/definitions/translation-value',
                                },
                                'translation-value2': {
                                    $ref: '#/definitions/translation-value',
                                },
                            },
                        },
                    },
                    {
                        title: 'skewY',
                        type: 'string',
                        enum: ['deg', 'grad', 'rad', 'turn'],
                        required: true,
                    },
                    {
                        title: 'skewX',
                        type: 'string',
                        enum: ['deg', 'grad', 'rad', 'turn'],
                        required: true,
                    },
                    {
                        title: 'scaleZ',
                        type: 'integer',
                    },
                    {
                        title: 'scaleY',
                        type: 'integer',
                    },
                    {
                        title: 'scaleX',
                        type: 'integer',
                    },
                    {
                        title: 'rotateZ',
                        type: 'string',
                        enum: ['deg', 'grad', 'rad', 'turn'],
                        required: true,
                    },
                    {
                        title: 'rotateY',
                        type: 'string',
                        enum: ['deg', 'grad', 'rad', 'turn'],
                        required: true,
                    },
                    {
                        title: 'rotateX',
                        type: 'string',
                        enum: ['deg', 'grad', 'rad', 'turn'],
                        required: true,
                    },
                    {
                        title: 'rotate',
                        type: 'string',
                        enum: ['deg', 'grad', 'rad', 'turn'],
                        required: true,
                    },
                    {
                        type: 'array',
                        format: 'table',
                        title: 'rotate3d',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'rotate3d',
                            properties: {
                                number1: {
                                    type: 'integer',
                                },
                                number2: {
                                    type: 'integer',
                                },
                                number3: {
                                    type: 'integer',
                                },
                                angle: {
                                    type: 'string',
                                    enum: ['deg', 'grad', 'rad', 'turn'],
                                    required: true,
                                },
                            },
                        },
                    },
                    {
                        title: 'perspective',
                        $ref: '#/definitions/length',
                    },
                    {
                        type: 'array',
                        format: 'table',
                        title: 'matrix3d',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'matrix3d',
                            properties: {
                                number1: {
                                    type: 'integer',
                                },
                                number2: {
                                    type: 'integer',
                                },
                                number3: {
                                    type: 'integer',
                                },
                                number4: {
                                    type: 'integer',
                                },
                                number5: {
                                    type: 'integer',
                                },
                                number6: {
                                    type: 'integer',
                                },
                                number7: {
                                    type: 'integer',
                                },
                                number8: {
                                    type: 'integer',
                                },
                                number9: {
                                    type: 'integer',
                                },
                                number10: {
                                    type: 'integer',
                                },
                                number11: {
                                    type: 'integer',
                                },
                                number12: {
                                    type: 'integer',
                                },
                                number13: {
                                    type: 'integer',
                                },
                                number14: {
                                    type: 'integer',
                                },
                                number15: {
                                    type: 'integer',
                                },
                                number16: {
                                    type: 'integer',
                                },
                            },
                        },
                    },
                    {
                        type: 'array',
                        format: 'table',
                        title: 'matrix',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'matrix',
                            properties: {
                                number1: {
                                    type: 'integer',
                                },
                                number2: {
                                    type: 'integer',
                                },
                                number3: {
                                    type: 'integer',
                                },
                                number4: {
                                    type: 'integer',
                                },
                                number5: {
                                    type: 'integer',
                                },
                                number6: {
                                    type: 'integer',
                                },
                            },
                        },
                    },
                ],
            },
            'transform-origin': {
                oneOf: [
                    {
                        type: 'array',
                        format: 'table',
                        title: 'transform-origin',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'transform-origin',
                            properties: {
                                first: {
                                    type: 'string',
                                    enum: [
                                        '50%',
                                        'top',
                                        'right',
                                        'left',
                                        'center',
                                        'bottom',
                                    ],
                                    required: true,
                                },
                                second: {
                                    type: 'string',
                                    enum: ['50%'],
                                    required: true,
                                },
                            },
                        },
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                ],
            },
            'text-shadow': {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['none'],
                        required: true,
                    },
                    {
                        type: 'array',
                        format: 'table',
                        title: 'text-shadow',
                        uniqueItems: true,
                        items: {
                            type: 'object',
                            title: 'text-shadow',
                            properties: {
                                length1: {
                                    $ref: '#/definitions/length',
                                },
                                length2: {
                                    $ref: '#/definitions/length',
                                },
                                length3: {
                                    $ref: '#/definitions/length',
                                },
                                length4: {
                                    title: 'color',
                                    type: 'string',
                                    format: 'color',
                                },
                            },
                        },
                    },
                ],
            },
            'transition-property': {
                oneOf: [
                    {
                        title: 'text-combine-horizontal',
                        type: 'string',
                        enum: ['none', 'all'],
                        required: true,
                    },
                    {
                        title: 'String',
                        type: 'string',
                    },
                ],
            },
            'transition-timing-function': {
                oneOf: [
                    {
                        type: 'string',
                        title: 'transition-timing-function',
                        enum: [
                            'ease',
                            'step-start',
                            'step-end',
                            'linear',
                            'ease-out',
                            'ease-in-out',
                            'ease-in',
                        ],
                        required: true,
                    },
                    {
                        type: 'object',
                        title: 'cubic-bezier',
                        properties: {
                            number1: {
                                type: 'string',
                            },
                            number2: {
                                type: 'string',
                            },
                            number3: {
                                type: 'string',
                            },
                            number4: {
                                type: 'string',
                            },
                        },
                    },
                    {
                        type: 'string',
                        title: 'steps',
                        enum: ['start', 'end'],
                        required: true,
                    },
                ],
            },
            'transition-duration': {
                $ref: '#/definitions/time',
            },
            'vertical-align': {
                oneOf: [
                    {
                        type: 'string',
                        enum: [
                            'baseline',
                            'top',
                            'text-top',
                            'text-bottom',
                            'super',
                            'sub',
                            'middle',
                            'bottom',
                        ],
                        required: true,
                    },
                    {
                        title: 'Percentage',
                        type: 'string',
                        enum: ['%'],
                        required: true,
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                ],
            },
            widows: {
                title: 'integer',
                type: 'integer',
                default: '2',
            },
            'word-spacing': {
                oneOf: [
                    {
                        title: 'word-spacing',
                        type: 'string',
                        enum: ['normal'],
                        required: true,
                    },
                    {
                        $ref: '#/definitions/length',
                    },
                    {
                        title: 'spacing',
                        type: 'string',
                        enum: ['%'],
                        required: true,
                    },
                ],
            },
            'z-index': {
                oneOf: [
                    {
                        title: 'z-index',
                        type: 'string',
                        enum: ['auto'],
                        required: true,
                    },
                    {
                        title: 'Integer',
                        type: 'integer',
                    },
                ],
            },
            'background-Color': {
                type: 'string',
                format: 'color',
                title: 'background-Color',
                default: '#ffa500',
            },
            display: {
                type: 'string',
                enum: [
                    'inline',
                    'table-row-group',
                    'table-row',
                    'table-header-group',
                    'table-footer-group',
                    'table-column-group',
                    'table-column',
                    'table-cell',
                    'table-caption',
                    'table',
                    'run-in',
                    'none',
                    'list-item',
                    'inline-table',
                    'inline-flex',
                    'inline-block',
                    'flex',
                    'compact',
                    'block',
                ],
                required: true,
            },
            position: {
                type: 'string',
                enum: [
                    'static',
                    'sticky  ',
                    'relative',
                    'page',
                    'fixed',
                    'center',
                    'absolute',
                ],
                required: true,
            },
            'background-color': {
                type: 'string',
                format: 'color',
                title: 'background-color',
                default: '#ffa500',
            },

            all: {
                type: 'string',
                enum: ['initial', 'unset', 'inherit'],
                required: true,
            },
            'animation-direction': {
                type: 'string',
                enum: ['normal', 'reverse', 'alternate-reverse', 'alternate'],
                required: true,
            },
            'animation-fill-mode': {
                type: 'string',
                enum: ['none', 'forwards', 'both', 'backwards'],
                required: true,
            },
            'animation-play-mode': {
                type: 'string',
                enum: ['running', 'paused'],
                required: true,
            },
            visibility: {
                type: 'string',
                enum: ['visible', 'hidden', 'collapse'],
                required: true,
            },
            'backface-visibility': {
                type: 'string',
                enum: ['visible', 'hidden'],
                required: true,
            },
            'background-attachment': {
                type: 'string',
                enum: ['scroll', 'local', 'fixed'],
                required: true,
            },
            'background-clip': {
                type: 'string',
                enum: ['border-box', 'padding-box', 'content-box'],
                required: true,
            },
            'background-origin': {
                type: 'string',
                enum: ['padding-box', 'content-box', 'border-box'],
                required: true,
            },
            'background-repeat': {
                type: 'string',
                enum: [
                    'repeat',
                    'space',
                    'round',
                    'repeat-y',
                    'repeat-x',
                    'repeat no-repeat',
                    'no-repeat',
                ],
                required: true,
            },
            'border-collapse': {
                type: 'string',
                enum: ['separate', 'collapse'],
                required: true,
            },
            'border-image-repeat': {
                type: 'string',
                enum: ['stretch', 'space', 'round', 'repeat'],
                required: true,
            },
            'box-decoration-break': {
                type: 'string',
                enum: ['slice', 'clone'],
                required: true,
            },
            'box-sizing': {
                type: 'string',
                enum: ['content-box', 'padding-box', 'border-box'],
                required: true,
            },
            'break-before': {
                type: 'string',
                enum: [
                    'auto',
                    'right',
                    'page',
                    'left',
                    'column',
                    'avoid-page',
                    'avoid-column',
                    'avoid',
                    'always',
                ],
                required: true,
            },
            'break-after': {
                type: 'string',
                enum: [
                    'auto',
                    'right',
                    'page',
                    'left',
                    'column',
                    'avoid-page',
                    'avoid-column',
                    'avoid',
                    'always',
                ],
                required: true,
            },
            'break-inside': {
                type: 'string',
                enum: ['auto', 'avoid-page', 'avoid-column', 'avoid'],
                required: true,
            },
            'caption-side': {
                type: 'string',
                enum: ['top', 'bottom'],
                required: true,
            },
            clear: {
                type: 'string',
                enum: ['none', 'right', 'left', 'both'],
                required: true,
            },
            'clear-after': {
                type: 'string',
                enum: [
                    'none',
                    'top',
                    'start',
                    'right',
                    'outside',
                    'left',
                    'inside',
                    'end',
                    'descendants',
                    'bottom',
                    'both',
                ],
                required: true,
            },
            'column-fill': {
                type: 'string',
                enum: ['balance', 'auto'],
                required: true,
            },
            'column-span': {
                type: 'string',
                enum: ['none', 'all'],
                required: true,
            },
            'column-rule-style': {
                type: 'string',
                enum: [
                    'none',
                    'solid',
                    'ridge',
                    'outset',
                    'inset',
                    'hidden',
                    'groove',
                    'double',
                    'dotted',
                    'dashed',
                ],
                required: true,
            },
            'empty-cells': {
                type: 'string',
                enum: ['show', 'hide'],
                required: true,
            },
            float: {
                type: 'string',
                enum: ['none', 'right', 'left'],
                required: true,
            },
            'flex-direction': {
                type: 'string',
                enum: ['row', 'row-reverse', 'column-reverse', 'column'],
                required: true,
            },
            'flex-wrap': {
                type: 'string',
                enum: ['nowrap', 'wrap-reverse', 'wrap'],
                required: true,
            },
            'justify-content': {
                type: 'string',
                enum: [
                    'flex-start',
                    'space-between',
                    'space-around',
                    'flex-end',
                    'center',
                ],
                required: true,
            },
            'align-items': {
                type: 'string',
                enum: [
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                ],
                required: true,
            },
            'align-self': {
                type: 'string',
                enum: [
                    'auto',
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                ],
                required: true,
            },
            'align-content': {
                type: 'string',
                enum: [
                    'stretch',
                    'space-between',
                    'space-around',
                    'flex-start',
                    'flex-end',
                    'center',
                ],
                required: true,
            },
            'font-stretch': {
                type: 'string',
                enum: [
                    'normal',
                    'ultra-expanded',
                    'ultra-condensed',
                    'semi-expanded',
                    'semi-condensed',
                    'extra-expanded',
                    'extra-condensed',
                    'expanded',
                    'condensed',
                ],
                required: true,
            },
            'font-synthesis': {
                type: 'string',
                enum: ['weight style', 'weight', 'style', 'none'],
                required: true,
            },
            'font-kerning': {
                type: 'string',
                enum: ['auto', 'normal', 'none'],
                required: true,
            },

            'font-variant': {
                type: 'string',
                enum: [
                    'normal',
                    'unicase',
                    'titling-caps',
                    'small-caps',
                    'petite-caps',
                    'all-small-caps',
                    'all-petite-caps',
                ],
                required: true,
            },
            'font-variant-caps': {
                type: 'string',
                enum: [
                    'normal',
                    'unicase',
                    'titling-caps',
                    'small-caps',
                    'petite-caps',
                    'all-small-caps',
                    'all-petite-caps',
                ],
                required: true,
            },
            'font-style': {
                type: 'string',
                enum: ['normal', 'oblique', 'italic'],
                required: true,
            },
            'font-weight': {
                type: 'string',
                enum: [
                    'normal',
                    'lighter',
                    'bolder',
                    'bold',
                    '900',
                    '800',
                    '700',
                    '600',
                    '500',
                    '400',
                    '300',
                    '200',
                    '100',
                ],
                required: true,
            },
            'hanging-punctuation': {
                type: 'string',
                enum: [
                    'none',
                    'last force-end',
                    'last allow-end',
                    'last',
                    'force-end',
                    'first force-end',
                    'first allow-end',
                    'first',
                    'allow-end',
                ],
                required: true,
            },
            hyphens: {
                type: 'string',
                enum: ['manual', 'none', 'auto'],
                required: true,
            },
            'image-resolution': {
                type: 'string',
                enum: ['1dppx', 'from-image'],
                required: true,
            },
            'line-break': {
                type: 'string',
                enum: ['auto', 'strict', 'normal', 'loose'],
                required: true,
            },
            'list-style-position': {
                type: 'string',
                enum: ['outside', 'inside'],
                required: true,
            },
            'list-style-type': {
                type: 'string',
                enum: [
                    'disc',
                    'upper-roman',
                    'upper-latin',
                    'upper-alpha',
                    'square',
                    'none',
                    'lower-roman',
                    'lower-latin',
                    'lower-greek',
                    'lower-alpha',
                    'georgian',
                    'decimal-leading-zero',
                    'decimal',
                    'circle',
                    'armenian',
                ],
                required: true,
            },
            'object-fit': {
                type: 'string',
                enum: ['fill', 'scale-down', 'none', 'cover', 'contain'],
                required: true,
            },
            'outline-style': {
                type: 'string',
                enum: [
                    'none',
                    'solid',
                    'ridge',
                    'outset',
                    'inset',
                    'groove',
                    'double',
                    'dotted',
                    'dashed',
                    'auto',
                ],
                required: true,
            },

            'overflow-wrap': {
                type: 'string',
                enum: ['normal', 'break-word'],
                required: true,
            },
            'page-break-after': {
                type: 'string',
                enum: ['auto', 'right', 'left', 'avoid', 'always'],
                required: true,
            },
            'page-break-before': {
                type: 'string',
                enum: ['auto', 'right', 'left', 'avoid', 'always'],
                required: true,
            },
            'page-break-inside': {
                type: 'string',
                enum: ['auto', 'avoid'],
                required: true,
            },
            'pointer-events': {
                type: 'string',
                enum: ['auto', 'none'],
                required: true,
            },
            resize: {
                type: 'string',
                enum: ['none', 'vertical', 'horizontal', 'alwbothays'],
                required: true,
            },
            'table-layout': {
                type: 'string',
                enum: ['auto', 'fixed'],
                required: true,
            },
            'text-align-last': {
                type: 'string',
                enum: [
                    'auto',
                    'start',
                    'right',
                    'left',
                    'justify',
                    'end',
                    'center',
                ],
                required: true,
            },
            'text-decoration-line': {
                type: 'string',
                enum: [
                    'none',
                    'underline',
                    'overline',
                    'line-through',
                    'blink',
                ],
                required: true,
            },
            'text-decoration-skip': {
                type: 'string',
                enum: [
                    'none',
                    'spaces',
                    'objects',
                    'ink',
                    'edges',
                    'box-decoration',
                ],
                required: true,
            },
            'text-decoration-position': {
                type: 'string',
                enum: [
                    'auto',
                    'under right',
                    'under left',
                    'under',
                    'right',
                    'left',
                ],
                required: true,
            },
            'text-decoration-style': {
                type: 'string',
                enum: ['solid', 'wavy', 'double', 'dotted', 'dashed'],
                required: true,
            },
            'text-emphasis-position': {
                type: 'string',
                enum: ['over right', 'over left', 'below right', 'below left'],
                required: true,
            },
            'text-justify': {
                type: 'string',
                enum: ['auto', 'none', 'inter-word', 'distribute'],
                required: true,
            },
            'text-orientation': {
                type: 'string',
                enum: [
                    'mixed',
                    'use-glyph-orientation',
                    'upright',
                    'sideways-right',
                    'sideways-left',
                    'sideways',
                ],
                required: true,
            },
            'transform-style': {
                type: 'string',
                enum: ['flat', 'preserve-3d'],
                required: true,
            },
            'text-transform': {
                type: 'string',
                enum: [
                    'none',
                    'uppercase',
                    'lowercase',
                    'full-width',
                    'capitalize',
                ],
                required: true,
            },
            'unicode-bidi': {
                type: 'string',
                enum: ['normal', 'embed', 'bidi-override'],
                required: true,
            },
            'white-space': {
                type: 'string',
                enum: ['normal', 'pre-wrap', 'pre-line', 'pre', 'nowrap'],
                required: true,
            },
            'word-break': {
                type: 'string',
                enum: ['normal', 'keep-all', 'break-all'],
                required: true,
            },
            'word-wrap': {
                type: 'string',
                enum: ['normal', 'break-word'],
                required: true,
            },
            'writing-mode': {
                type: 'string',
                enum: ['horizontal-tb', 'vertical-rl', 'vertical-lr'],
                required: true,
            },
            'margin-left': {
                $ref: '#/definitions/length',
            },
            'margin-right': {
                $ref: '#/definitions/length',
            },
            'margin-top': {
                $ref: '#/definitions/length',
            },
            'margin-bottom': {
                $ref: '#/definitions/length',
            },
            'animation-delay': {
                $ref: '#/definitions/time',
            },
            'animation-duration': {
                $ref: '#/definitions/time',
            },
            overflow: {
                $ref: '#/definitions/overflow',
            },
            'overflow-x': {
                $ref: '#/definitions/overflow',
            },
            'overflow-y': {
                $ref: '#/definitions/overflow',
            },
        },
    },
};

export default schema;
