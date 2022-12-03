import React, { useContext } from 'react';
import { Editor, prompt } from '@gdi/web-ui';
import { Wrapper } from './ArticleEditor.style';
import { ArticleEditorTop } from '../ArticleEditorTop/ArticleEditorTop';
import { ArticleContext } from './ArticleEditor.context';

export type ArticleEditorProps = {};

export function ArticleEditor(_props: ArticleEditorProps) {
    const context = useContext(ArticleContext);
    return (
        <Wrapper
            className='ArticleEditor-wrapper'
            data-testid='ArticleEditor-wrapper'
        >
            <ArticleEditorTop>
                <Editor
                    value={context.content}
                    onChange={context.onContentChange}
                    inputPrompt={prompt.input}
                />
            </ArticleEditorTop>
        </Wrapper>
    );
}

export default ArticleEditor;
