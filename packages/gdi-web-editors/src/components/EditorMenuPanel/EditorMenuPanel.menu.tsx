import { IEditorAction } from '../../types';

export const barActions: IEditorAction[] = [
    {
        id: 'bold',
        command: 'toggleBold',
        iconName: 'format_bold',
    },
    {
        id: 'italic',
        command: 'toggleItalic',
        iconName: 'format_italic',
    },
    {
        id: 'strike',
        command: 'toggleStrike',
        iconName: 'format_strikethrough',
    },
    {
        id: 'underline',
        isActiveParams: { level: 1 },
        command: 'toggleHeading',
        commandParams: { level: 1 },
        iconName: 'format_underlined',
    },
    {
        id: 'blockquote',
        command: 'toggleBlockquote',
        iconName: 'format_quote',
    },
    {
        id: 'h2',
        isActiveParams: { level: 2 },
        command: 'toggleHeading',
        commandParams: { level: 2 },
        title: 'H2',
    },
    {
        id: 'h3',
        isActiveParams: { level: 3 },
        command: 'toggleHeading',
        commandParams: { level: 3 },
        title: 'H3',
    },
    {
        id: 'h4',
        isActiveParams: { level: 4 },
        command: 'toggleHeading',
        commandParams: { level: 4 },
        title: 'H4',
    },
    {
        id: 'h5',
        isActiveParams: { level: 5 },
        command: 'toggleHeading',
        commandParams: { level: 5 },
        title: 'H5',
    },
    {
        id: 'codeBlock',
        command: 'toggleCodeBlock',
        iconName: 'code',
    },

    {
        id: 'bulletList',
        command: 'toggleBulletList',
        iconName: 'format_list_bulleted',
    },
    {
        id: 'orderedList',
        command: 'toggleOrderedList',
        iconName: 'format_list_numbered',
    },

    {
        id: 'undo',
        command: 'undo',
        noActiveState: true,
        iconName: 'undo',
    },
    {
        id: 'redo',
        command: 'redo',
        noActiveState: true,
        iconName: 'redo',
    },
    {
        id: 'textAlignJustify',
        isActiveParams: { textAlign: 'justify' },
        command: 'setTextAlign',
        commandParams: 'justify',
        iconName: 'format_align_justify',
    },
    {
        id: 'highlight',
        command: 'toggleHighlight',
        title: 'Highlight',
    },
    {
        id: 'textAlignLeft',
        isActiveParams: { textAlign: 'left' },
        command: 'setTextAlign',
        commandParams: 'left',
        iconName: 'format_align_left',
    },
    {
        id: 'textAlignCenter',
        isActiveParams: { textAlign: 'center' },
        command: 'setTextAlign',
        commandParams: 'center',
        iconName: 'format_align_center',
    },
    {
        id: 'textAlignRight',
        isActiveParams: { textAlign: 'right' },
        command: 'setTextAlign',
        commandParams: 'right',
        iconName: 'format_align_right',
    },

    {
        id: 'download',
        iconName: 'download',
    },
    {
        id: 'image',
        isActiveParams: { textAlign: 'justify' },
        command: 'setTextAlign',
        commandParams: 'justify',
        iconName: 'image',
    },
    {
        id: 'video',
        iconName: 'movie',
    },
    {
        id: 'link',
        isActiveParams: { textAlign: 'justify' },
        command: 'setTextAlign',
        commandParams: 'justify',
        iconName: 'link',
    },
    {
        id: 'embed',
        iconName: 'share',
    },
];
