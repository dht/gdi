import React, { useMemo } from 'react';
import ImportExport from '../components/ImportExport/ImportExport';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

let popup;

export const ImportExportContainer = () => {
    const callbacks = useMemo(
        () => ({
            openPreview: () => {
                popup = window.open(
                    document.location.origin + '/preview',
                    '_blank'
                );
            },
        }),
        []
    );

    return <ImportExport callbacks={callbacks} />;
};
