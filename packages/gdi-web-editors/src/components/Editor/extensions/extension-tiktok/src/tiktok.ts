import { mergeAttributes, Node, nodePasteRule } from '@tiptap/core';

import {
    getEmbedURLFromTiktokURL,
    isValidTiktokUrl,
    YOUTUBE_REGEX_GLOBAL,
} from './utils';

export interface TiktokOptions {
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
        tiktok: {
            /**
             * Insert a tiktok video
             */
            setTiktokVideo: (options: {
                src: string;
                width?: number;
                height?: number;
                start?: number;
            }) => ReturnType;
        };
    }
}

export const Tiktok = Node.create<TiktokOptions>({
    name: 'tiktok',

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
                tag: 'div[data-tiktok-video] iframe',
            },
        ];
    },

    addCommands() {
        return {
            setTiktokVideo:
                (options) =>
                ({ commands }) => {
                    if (!isValidTiktokUrl(options.src)) {
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
        const embedUrl = getEmbedURLFromTiktokURL({
            url: HTMLAttributes.src,
            controls: this.options.controls,
            nocookie: this.options.nocookie,
            startAt: HTMLAttributes.start || 0,
        });

        HTMLAttributes.src = embedUrl;

        return [
            'div',
            { 'data-tiktok-video': '' },
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
