import BusinessInfo from '../components/BusinessInfo/BusinessInfo';
import React, { useMemo } from 'react';
import { selectors } from '../selectors';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store';

export const BusinessInfoContainer = () => {
    const dispatch = useDispatch();
    const businessInfo = useSelector(selectors.raw.$rawBusiness);

    const allOptions = useSelector(selectors.options.$allOptions);
    const allDetails = useMemo(() => ({}), []);

    const callbacks = useMemo(
        () => ({
            onSave: async (change: Json, _allData: Json) => {
                console.log('actions.business ->', actions.business);
                await dispatch(actions.business.patch(change));
                return Promise.resolve(true);
            },
        }),
        []
    );

    return (
        <BusinessInfo
            businessInfo={businessInfo as Json}
            allOptions={allOptions}
            allDetails={allDetails}
            callbacks={callbacks}
        />
    );
};

export default BusinessInfoContainer;
