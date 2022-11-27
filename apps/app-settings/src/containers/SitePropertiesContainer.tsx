import React, { useCallback } from 'react';
import SiteProperties from '../components/SiteProperties/SiteProperties';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { downloadJson } from 'shared-base';

export const SitePropertiesContainer = () => {
    const dispatch = useDispatch();
    const siteProperties = useSelector(selectors.raw.$rawSiteProperties);

    const onSave = useCallback((change: Json) => {
        dispatch(actions.siteProperties.patch(change));
    }, []);

    const onDownload = useCallback((json: Json) => {
        downloadJson('siteProperties.json', json);
    }, []);

    return (
        <SiteProperties
            siteProperties={siteProperties}
            onSave={onSave}
            onDownload={onDownload}
        />
    );
};

export default SitePropertiesContainer;
