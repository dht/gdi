import React from 'react';
import { selectors } from '../store';
import { Articles } from '../components/Articles/Articles';
import { useDispatch, useSelector } from 'react-redux';

export const ArticlesContainer = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectors.tables.$articles);
    const allOptions = useSelector(selectors.options.$allOptions);

    console.log('allOptions ->', JSON.stringify(allOptions));

    return (
        <Articles data={articles} allOptions={allOptions} dispatch={dispatch} />
    );
};
