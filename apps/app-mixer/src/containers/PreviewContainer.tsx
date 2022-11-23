import React from 'react';
import Preview from '../components/Preview/Preview';
import { useSelector } from 'react-redux';
import { selectors } from '../store';

export const PreviewContainer = () => {
    const elements = useSelector(selectors.base.$instancesForCurrentPage);
    const datasets = useSelector(selectors.raw.$rawLibraryDatasets);

    return <Preview elements={elements} datasets={datasets} />;
};
