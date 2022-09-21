import { mergeAttributes, Node, nodePasteRule } from '@tiptap/core';

import {
    getEmbedURLFromJsBinURL,
    isValidJsBinUrl,
    YOUTUBE_REGEX_GLOBAL,
} from './utils';

export interface JsBinOptions {
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
        jsBin: {
            /**
             * Insert a jsBin video
             */
            setJsBinVideo: (options: {
                src: string;
                width?: number;
                height?: number;
                start?: number;
            }) => ReturnType;
        };
    }
}

export const JsBin = Node.create<JsBinOptions>({
    name: 'jsBin',

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
                tag: 'div[data-jsBin-video] iframe',
            },
        ];
    },

    addCommands() {
        return {
            setJsBinVideo:
                (options) =>
                ({ commands }) => {
                    if (!isValidJsBinUrl(options.src)) {
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
        const embedUrl = getEmbedURLFromJsBinURL({
            url: HTMLAttributes.src,
            controls: this.options.controls,
            nocookie: this.options.nocookie,
            startAt: HTMLAttributes.start || 0,
        });

        HTMLAttributes.src = embedUrl;

        return [
            'div',
            { 'data-jsBin-video': '' },
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
