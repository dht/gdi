import React, { useMemo } from 'react';
import ArticleEditor from '../components/ArticleEditor/ArticleEditor';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { ArticleEditorBarContainer } from './ArticleEditorBarContainer';
import { ArticleContextProvider } from '../components/ArticleEditor/ArticleEditor.context';

export const ArticleEditorContainer = () => {
    const dispatch = useDispatch();
    const article = useSelector(selectors.base.$article);

    const onSave = (change: Json) => {
        console.log('onSave ->', change);
    };

    if (!article) {
        return null;
    }

    return (
        <ArticleContextProvider article={article} onSave={onSave}>
            <ArticleEditorBarContainer />
            <ArticleEditor />
        </ArticleContextProvider>
    );
};
