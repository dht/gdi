import React, { useMemo } from 'react';
import GuidanceIntro from '../components/GuidanceIntro/GuidanceIntro';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store/selectors.index';
import { invokeEvent } from 'shared-base';

export const GuidanceIntroContainer = () => {
    const callbacks = useMemo(
        () => ({
            onGetStarted: () => {
                invokeEvent('navigate', {
                    path: '/admin/services/guidance/ranking',
                });
            },
        }),
        []
    );

    return <GuidanceIntro callbacks={callbacks} />;
};

export default GuidanceIntroContainer;
