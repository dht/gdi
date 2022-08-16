import { mergeAttributes, Node, nodePasteRule } from '@tiptap/core';

import {
    getEmbedURLFromGoogleMapsURL,
    isValidGoogleMapsUrl,
    YOUTUBE_REGEX_GLOBAL,
} from './utils';

export interface GoogleMapsOptions {
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
        googleMaps: {
            /**
             * Insert a googleMaps video
             */
            setGoogleMapsVideo: (options: {
                src: string;
                width?: number;
                height?: number;
                start?: number;
            }) => ReturnType;
        };
    }
}

export const GoogleMaps = Node.create<GoogleMapsOptions>({
    name: 'googleMaps',

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
                tag: 'div[data-googleMaps-video] iframe',
            },
        ];
    },

    addCommands() {
        return {
            setGoogleMapsVideo:
                (options) =>
                ({ commands }) => {
                    if (!isValidGoogleMapsUrl(options.src)) {
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
        const embedUrl = getEmbedURLFromGoogleMapsURL({
            url: HTMLAttributes.src,
            controls: this.options.controls,
            nocookie: this.options.nocookie,
            startAt: HTMLAttributes.start || 0,
        });

        HTMLAttributes.src = embedUrl;

        return [
            'div',
            { 'data-googleMaps-video': '' },
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
