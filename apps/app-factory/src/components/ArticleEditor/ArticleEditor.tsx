import React, { useContext } from 'react';
import { Editor, prompt } from '@gdi/web-ui';
import { Container } from './ArticleEditor.style';
import { ArticleEditorTop } from '../ArticleEditorTop/ArticleEditorTop';
import { ArticleContext } from './ArticleEditor.context';

export type ArticleEditorProps = {};

export function ArticleEditor(_props: ArticleEditorProps) {
    const context = useContext(ArticleContext);
    return (
        <Container
            className='ArticleEditor-container'
            data-testid='ArticleEditor-container'
        >
            <ArticleEditorTop>
                <Editor
                    value={context.content}
                    onChange={context.onContentChange}
                    inputPrompt={prompt.input}
                />
            </ArticleEditorTop>
        </Container>
    );
}

export default ArticleEditor;
