import React, { useContext } from 'react';
import {
    A,
    Container,
    Field,
    Inner,
    Meta,
    Value,
} from './ArticleEditorBar.style';
import { useLocation } from 'react-router-dom';
import { invokeEvent } from 'shared-base';
import { ArticleContext } from '../ArticleEditor/ArticleEditor.context';

export type ArticleEditorBarProps = {
    timeSpent: string;
};

export function ArticleEditorBar(props: ArticleEditorBarProps) {
    const { timeSpent } = props;
    const context = useContext(ArticleContext);
    const { wordCount } = context;

    const location = useLocation();

    function onClick() {
        const parts = location.pathname.split('/');
        parts.pop();
        const path = parts.join('/');
        invokeEvent('navigate', { path });
    }

    return (
        <Container
            className='ArticleEditorBar-container'
            data-testid='ArticleEditorBar-container'
        >
            <Inner>
                <A onClick={onClick}>Articles</A>

                <Meta>
                    <Field>
                        Autosaved
                        <Value>5 minutes ago</Value>
                    </Field>
                    <Field>
                        Time spent editing
                        <Value>{timeSpent}</Value>
                    </Field>
                    <Field>
                        Word count
                        <Value>{wordCount.toLocaleString()}</Value>
                    </Field>
                    <Field>
                        Status
                        <Value>Published</Value>
                    </Field>
                </Meta>
            </Inner>
        </Container>
    );
}

export default ArticleEditorBar;
