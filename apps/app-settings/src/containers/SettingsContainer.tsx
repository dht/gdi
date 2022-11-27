import React, { useCallback } from 'react';
import Settings from '../components/Settings/Settings';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { downloadJson } from 'shared-base';

export const SettingsContainer = () => {
    const dispatch = useDispatch();
    const settings = useSelector(selectors.raw.$rawSettings);

    const onSave = useCallback((change: Json) => {
        dispatch(actions.settings.patch(change));
    }, []);

    const onDownload = useCallback((json: Json) => {
        downloadJson('settings.json', json);
    }, []);

    return (
        <Settings settings={settings} onSave={onSave} onDownload={onDownload} />
    );
};

export default SettingsContainer;
