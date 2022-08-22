import React from 'react';
import Preview from '../components/Preview/Preview';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const PreviewContainer = () => {
    const elements = useSelector(selectors.base.$pageStructure);

    return <Preview elements={elements} />;
};
