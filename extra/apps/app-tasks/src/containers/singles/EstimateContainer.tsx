import React, { useCallback } from 'react';
import Estimate from '../../components/Estimate/Estimate';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../../store';
import {
    Estimation,
    estimations,
} from '../../components/Estimate/Estimate.data';

export const EstimateContainer = () => {
    const dispatch = useDispatch();

    const onClick = useCallback((estimation: Estimation) => {
        dispatch({
            type: 'BLKR_SET_ESTIMATION',
            value: estimation.value,
            estimationTitle: estimation.id,
        });
    }, []);

    return <Estimate estimations={estimations} onClick={onClick} />;
};

export default EstimateContainer;
