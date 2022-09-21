import { mergeAttributes, Node, nodePasteRule } from '@tiptap/core';

import {
    getEmbedURLFromDribbbleURL,
    isValidDribbbleUrl,
    YOUTUBE_REGEX_GLOBAL,
} from './utils';

export interface DribbbleOptions {
    addPasteHandler: boolean;
    allowFullscreen: boolean;
    controls: boolean;
    height: number;
    HTMLAttributes: Record<string, any>;
    inline: boolean;
    nocookie: boolean;
    width: number;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        dribbble: {
            /**
             * Insert a dribbble video
             */
            setDribbbleVideo: (options: {
                src: string;
                width?: number;
                height?: number;
                start?: number;
            }) => ReturnType;
        };
    }
}

export const Dribbble = Node.create<DribbbleOptions>({
    name: 'dribbble',

    addOptions() {
        return {
            addPasteHandler: true,
            allowFullscreen: false,
            controls: true,
            height: 480,
            HTMLAttributes: {},
            inline: false,
            nocookie: false,
            width: 640,
        };
    },

    inline() {
        return this.options.inline;
    },

    group() {
        return this.options.inline ? 'inline' : 'block';
    },

    draggable: true,

    addAttributes() {
        return {
            src: {
                default: null,
            },
            start: {
                default: 0,
            },
            width: {
                default: this.options.width,
            },
            height: {
                default: this.options.height,
            },
        };
    },

    parseHTML() {
        return [
            {
                tag: 'div[data-dribbble-video] iframe',
            },
        ];
    },

    addCommands() {
        return {
            setDribbbleVideo:
                (options) =>
                ({ commands }) => {
                    if (!isValidDribbbleUrl(options.src)) {
                        return false;
                    }

                    return commands.insertContent({
                        type: this.name,
                        attrs: options,
                    });
                },
        };
    },

    addPasteRules() {
        if (!this.options.addPasteHandler) {
            return [];
        }

        return [
            nodePasteRule({
                find: YOUTUBE_REGEX_GLOBAL,
                type: this.type,
                getAttributes: (match) => {
                    return { src: match.input };
                },
            }),
        ];
    },

    renderHTML({ HTMLAttributes }) {
        const embedUrl = getEmbedURLFromDribbbleURL({
            url: HTMLAttributes.src,
            controls: this.options.controls,
            nocookie: this.options.nocookie,
            startAt: HTMLAttributes.start || 0,
        });

        HTMLAttributes.src = embedUrl;

        return [
            'div',
            { 'data-dribbble-video': '' },
            [
                'iframe',
                mergeAttributes(
                    this.options.HTMLAttributes,
                    {
                        width: this.options.width,
                        height: this.options.height,
                        allowfullscreen: this.options.allowFullscreen,
                    },
                    HTMLAttributes
                ),
            ],
        ];
    },
});
