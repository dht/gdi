import React from 'react';
import { selectors } from '../store';
import { Articles } from '../components/Articles/Articles';
import { definitions } from '../components/Articles/definitions/table';
import { useSelector } from 'react-redux';

export const ArticlesContainer = () => {
    const articles = useSelector(selectors.tables.$articles);
    const allOptions = useSelector(selectors.options.$allOptions);

    console.log('allOptions ->', JSON.stringify(allOptions));

    return (
        <Articles {...definitions} data={articles} allOptions={allOptions} />
    );
};
