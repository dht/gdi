import React, { useMemo } from 'react';
import ArticleEditorBar from '../components/ArticleEditorBar/ArticleEditorBar';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { useTabStopwatch } from '@gdi/hooks';

const REPORT_INTERVAL_IN_SECONDS = 10;

export const ArticleEditorBarContainer = () => {
    const dispatch = useDispatch();
    const meta = useSelector(selectors.base.$articleMeta);

    useTabStopwatch(() => {
        if (!meta) {
            return;
        }
        const minutes = REPORT_INTERVAL_IN_SECONDS / 60;
        const nextMinutesSpentEditing = meta.minutesSpentEditing + minutes;

        dispatch(
            actions.articles.patch(meta.id, {
                minutesSpentEditing: nextMinutesSpentEditing,
            })
        );
    }, REPORT_INTERVAL_IN_SECONDS * 1000);

    return <ArticleEditorBar meta={meta} />;
};

export default ArticleEditorBarContainer;
