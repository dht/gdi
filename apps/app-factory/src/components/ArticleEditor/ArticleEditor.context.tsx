import React, { useMemo } from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';
import { ArticleEditorProps } from './ArticleEditor';
import { emptyArticle } from './ArticleEditor.empty';
import { useInterval, useUnmount } from 'react-use';

const AUTO_SAVE_DELAY = 5000;

type IArticleContext = {
    title: string;
    intro: string;
    content: string;
    isDirty: boolean;
    article: IArticle;
    wordCount: number;
    patchState: (change: Partial<IArticleContext>) => void;
} & Callbacks;

const initialState: IArticleContext = {
    title: '',
    intro: '',
    content: '',
    isDirty: false,
    wordCount: 0,
    article: {
        ...emptyArticle,
    },
    onTitleChange: (text: string) => {},
    onIntroChange: (text: string) => {},
    onCategoryClick: () => {},
    onImageClick: () => {},
    onContentChange: (content: string) => {},
    patchState: () => {},
};

export const ArticleContext = createContext<IArticleContext>(initialState);

type ArticleContextProvider = ArticleEditorProps & {
    article: IArticle;
    onSave: (change: Json) => void;
    children: JSX.Element | JSX.Element[];
};

export const ArticleContextProvider = (props: ArticleContextProvider) => {
    const { article } = props;
    const { title, intro, content = '' } = article;

    const wordCount = content.split(' ').length;

    const [state, patchState] = useSetState<IArticleContext>({
        ...initialState,
        title,
        intro,
        content,
        article,
        wordCount,
    });

    const { isDirty } = state;

    const callbacks = useMemo(
        () => ({
            onTitleChange: (text: string) => {
                patchState({
                    title: text,
                    isDirty: true,
                });
            },
            onIntroChange: (text: string) => {
                patchState({
                    intro: text,
                    isDirty: true,
                });
            },
            onCategoryClick: () => {},
            onImageClick: () => {},
            onContentChange: (html: string) => {
                const wordCount = html.split(' ').length;

                patchState({
                    content: html,
                    wordCount,
                    isDirty: true,
                });
            },
        }),
        [state]
    );

    useInterval(() => {
        if (!isDirty) {
            return;
        }

        props.onSave({
            title: state.title,
            intro: state.intro,
            content: state.content,
        });

        patchState({
            isDirty: false,
        });
    }, AUTO_SAVE_DELAY);

    useUnmount(() => {
        if (!isDirty) {
            return;
        }

        props.onSave({
            title: state.title,
            intro: state.intro,
            content: state.content,
        });
    });

    const cValue = useMemo(
        () => ({
            ...state,
            ...callbacks,
            patchState,
        }),
        [state, patchState, callbacks]
    );

    return (
        <ArticleContext.Provider value={cValue}>
            {props.children}
        </ArticleContext.Provider>
    );
};

type Callbacks = {
    onTitleChange: (text: string) => void;
    onIntroChange: (text: string) => void;
    onCategoryClick: () => void;
    onImageClick: () => void;
    onContentChange: (content: string) => void;
};
