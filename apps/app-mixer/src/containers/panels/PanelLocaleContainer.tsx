import React from 'react';
import Locale from '../../components/Locale/Locale';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';

export const PanelLocaleContainer = () => {
    const dispatch = useDispatch();
    const localeOptions = useSelector(selectors.raw.$rawLocales);
    const selectedLocaleId = useSelector(selectors.raw.$rawLocale).localeId; // prettier-ignore

    function onSelect(id: string) {
        dispatch(
            actions.locale.patch({
                localeId: id,
            })
        );
    }

    return (
        <Locale
            selectedLocaleId={selectedLocaleId}
            options={Object.values(localeOptions)}
            onSelect={onSelect}
        />
    );
};
