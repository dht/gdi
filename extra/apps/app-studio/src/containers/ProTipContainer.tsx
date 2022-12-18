import React, { useMemo } from 'react';
import ProTip from '../components/ProTip/ProTip';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

export const ProTipContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppStateDashboard);
    const { showQuickTip, quickTipUrl } = appState;

    const callbacks = useMemo(
        () => ({
            onClose: () => {
                dispatch(
                    actions.appStateDashboard.patch({
                        showQuickTip: false,
                    })
                );
            },
        }),
        [showQuickTip]
    );

    if (!showQuickTip) {
        return null;
    }

    return <ProTip contentUrl={quickTipUrl} callbacks={callbacks} />;
};

export default ProTipContainer;
