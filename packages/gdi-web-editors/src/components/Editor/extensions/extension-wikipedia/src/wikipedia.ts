import { mergeAttributes, Node, nodePasteRule } from '@tiptap/core';

import {
    getEmbedURLFromWikipediaURL,
    isValidWikipediaUrl,
    YOUTUBE_REGEX_GLOBAL,
} from './utils';

export interface WikipediaOptions {
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
        wikipedia: {
            /**
             * Insert a wikipedia video
             */
            setWikipediaVideo: (options: {
                src: string;
                width?: number;
                height?: number;
                start?: number;
            }) => ReturnType;
        };
    }
}

export const Wikipedia = Node.create<WikipediaOptions>({
    name: 'wikipedia',

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
                tag: 'div[data-wikipedia-video] iframe',
            },
        ];
    },

    addCommands() {
        return {
            setWikipediaVideo:
                (options) =>
                ({ commands }) => {
                    if (!isValidWikipediaUrl(options.src)) {
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
        const embedUrl = getEmbedURLFromWikipediaURL({
            url: HTMLAttributes.src,
            controls: this.options.controls,
            nocookie: this.options.nocookie,
            startAt: HTMLAttributes.start || 0,
        });

        HTMLAttributes.src = embedUrl;

        return [
            'div',
            { 'data-wikipedia-video': '' },
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
