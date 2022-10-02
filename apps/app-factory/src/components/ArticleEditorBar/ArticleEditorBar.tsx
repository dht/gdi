import React, { useContext, useMemo } from 'react';
import {
    A,
    Container,
    Field,
    Inner,
    Meta,
    Value,
} from './ArticleEditorBar.style';
import { useLocation } from 'react-router-dom';
import { invokeEvent, SimpleDate, minutesToDuration } from 'shared-base';
import { ArticleContext } from '../ArticleEditor/ArticleEditor.context';

export type ArticleEditorBarProps = {
    meta?: {
        minutesSpentEditing: number;
        status: IArticleStatus;
        lastSaveDate: string;
    };
};

export function ArticleEditorBar(props: ArticleEditorBarProps) {
    const { meta } = props;
    const {
        minutesSpentEditing = 0,
        status = 'unknown',
        lastSaveDate = '',
    } = meta || {};

    const context = useContext(ArticleContext);
    const { wordCount } = context;

    const lastSaveDateText = useMemo(() => {
        return new SimpleDate(lastSaveDate).timeAgo() || '-';
    }, [lastSaveDate]);

    const minutesSpentEditingText = useMemo(() => {
        return minutesToDuration(minutesSpentEditing) || '-';
    }, [minutesSpentEditing]);

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
                        <Value>{lastSaveDateText}</Value>
                    </Field>
                    <Field>
                        Time spent editing
                        <Value>{minutesSpentEditingText}</Value>
                    </Field>
                    <Field>
                        Word count
                        <Value>{wordCount.toLocaleString()}</Value>
                    </Field>
                    <Field>
                        Status
                        <Value>{status}</Value>
                    </Field>
                </Meta>
            </Inner>
        </Container>
    );
}

export default ArticleEditorBar;
