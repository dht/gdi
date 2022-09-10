import React from 'react';
import LibraryWidgets from '../../components/LibraryWidgets/LibraryWidgets';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../../store';

export const PanelLibraryContainer = () => {
    return <LibraryWidgets />;
};
