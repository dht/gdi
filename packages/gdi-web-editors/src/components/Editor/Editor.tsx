import React, { FormEvent, useRef, useState } from 'react';
import { Container } from './Editor.style';
import { Editor as TEditor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import CharacterCount from '@tiptap/extension-character-count';
import Youtube from '@tiptap/extension-youtube';
import { barActions } from '../EditorMenuPanel/EditorMenuPanel.menu';
import EditorMenuPanel from '../EditorMenuPanel/EditorMenuPanel';
import { IEditorAction } from '../../types';
import { downloadHtml } from 'shared-base';
import { useMount } from 'react-use';

export type EditorProps = {
    value: string;
    onChange: (html: string) => void;
    inputPrompt?: Prompt;
};

export function Editor(props: EditorProps) {
    const { value, inputPrompt = defaultPrompt } = props;

    const editor = useEditor({
        autofocus: 'end',
        extensions: [
            StarterKit,
            TextAlign,
            CharacterCount.configure({}),
            Youtube.configure({
                inline: false,
                controls: false,
            }),
        ],
        content: value,
        onUpdate({ editor }) {
            props.onChange(editor.getHTML());
        },
    });

    async function onExternalAction(action: IEditorAction) {
        let promptResponse;

        if (!editor) {
            return;
        }

        switch (action.id) {
            case 'download':
                downloadHtml('article.html', value);
                break;
            case 'video':
                promptResponse = await inputPrompt('Enter YouTube URL');

                if (promptResponse.didCancel) {
                    return;
                }

                editor.commands.setYoutubeVideo({
                    src: promptResponse.value,
                    width: 640,
                    height: 480,
                });
                break;
        }
    }

    return (
        <Container className='Editor-container' data-testid='Editor-container'>
            <EditorMenuPanel
                barActions={barActions}
                onExternalAction={onExternalAction}
                editor={editor as any}
            />
            <EditorContent editor={editor} />
        </Container>
    );
}

export default Editor;

type Prompt = (message: string) => Promise<{
    value: string;
    didCancel?: boolean;
}>;

const defaultPrompt = async (message: string) => {
    const value = prompt(message) ?? '';
    const didCancel = value === null;

    return {
        value,
        didCancel,
    };
};
