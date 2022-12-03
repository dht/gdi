import React, { useContext, useMemo } from 'react';
import {
    A,
    Wrapper,
    Field,
    Inner,
    Meta,
    Value,
} from './ArticleEditorBar.style';
import { invokeEvent } from 'shared-base';
import { timeAgo, duration, minutesPassed } from '@gdi/language';

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
    } = meta ?? {};

    const context = useContext(ArticleContext);
    const { wordCount } = context;

    const lastSaveDateText = useMemo(() => {
        const minutesAgo = minutesPassed(new Date(lastSaveDate)) ?? 0;

        if (minutesAgo > 60 * 24) {
            return '-';
        }

        return timeAgo(lastSaveDate) ?? '-';
    }, [lastSaveDate]);

    const minutesSpentEditingText = useMemo(() => {
        return duration(minutesSpentEditing * 60) ?? '-';
    }, [minutesSpentEditing]);

    function onClick() {
        invokeEvent('navigatePop');
    }

    return (
        <Wrapper
            className='ArticleEditorBar-wrapper'
            data-testid='ArticleEditorBar-wrapper'
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
        </Wrapper>
    );
}

export default ArticleEditorBar;
