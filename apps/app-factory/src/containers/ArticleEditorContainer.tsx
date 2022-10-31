import React, { useMemo } from 'react';
import ArticleEditor from '../components/ArticleEditor/ArticleEditor';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { ArticleEditorBarContainer } from './ArticleEditorBarContainer';
import { ArticleContextProvider } from '../components/ArticleEditor/ArticleEditor.context';
import { dateDbLong } from '@gdi/language';

export const ArticleEditorContainer = () => {
    const dispatch = useDispatch();
    const article = useSelector(selectors.base.$article);

    const onSave = (change: Json) => {
        dispatch(
            actions.articles.patch(article.id, {
                ...change,
                lastSaveDate: dateDbLong(new Date()),
            })
        );
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
