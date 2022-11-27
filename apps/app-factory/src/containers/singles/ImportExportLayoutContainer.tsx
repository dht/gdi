import React, { useMemo } from 'react';
import ImportExportLayout from '../../components/ImportExportLayout/ImportExportLayout';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../../store';

let popup;

export const ImportExportLayoutContainer = () => {
    const dispatch = useDispatch();

    const callbacks = useMemo(
        () => ({
            downloadLayout: () => {
                dispatch({ type: 'EXPORT_LAYOUT' });
            },
        }),
        []
    );

    return <ImportExportLayout callbacks={callbacks} />;
};

export default ImportExportLayoutContainer;
