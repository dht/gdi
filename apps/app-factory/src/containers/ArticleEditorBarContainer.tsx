import React, { useMemo } from 'react';
import ArticleEditorBar from '../components/ArticleEditorBar/ArticleEditorBar';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { useTabStopwatch } from '@gdi/hooks';

export const ArticleEditorBarContainer = () => {
    const article = useSelector(selectors.base.$article);

    // useTabStopwatch(() => {
    // console.log('123 ->', 123);
    // });

    const timeSpent = '15h 25m';

    return <ArticleEditorBar timeSpent={timeSpent} />;
};
