import React, { useMemo } from 'react';
import Reader from '../components/Reader/Reader';
import { actions, selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';

export const ReaderContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppStateDashboard);
    const { showReader, readerUrl } = appState;

    const callbacks = useMemo(
        () => ({
            onClose: () => {
                dispatch(
                    actions.appStateDashboard.patch({
                        showReader: false,
                    })
                );
            },
        }),
        [showReader]
    );

    if (!showReader) {
        return null;
    }

    return <Reader mode='light' contentUrl={readerUrl} callbacks={callbacks} />;
};

export default ReaderContainer;
