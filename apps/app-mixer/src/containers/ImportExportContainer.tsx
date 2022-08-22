import React, { useMemo } from 'react';
import ImportExport from '../components/ImportExport/ImportExport';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

let popup;

export const ImportExportContainer = () => {
    const dispatch = useDispatch();

    const callbacks = useMemo(
        () => ({
            openPreview: () => {
                popup = window.open(
                    document.location.origin + '/preview',
                    '_blank'
                );
            },
            downloadSiteJson: () => {
                dispatch({ type: 'EXPORT_SITE' });
            },
            importSite: () => {
                dispatch({ type: 'IMPORT_SITE' });
            },
        }),
        []
    );

    return <ImportExport callbacks={callbacks} />;
};
