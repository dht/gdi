import React, { useMemo } from 'react';
import { selectors } from '../store';
import Pages from '../components/Pages/Pages';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';

export const PagesContainer = () => {
    const dispatch = useDispatch();

    const pages = useSelector(selectors.tables.$libraryPages);
    const allOptions = useSelector(selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                // console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, data?: Json) => {
                console.log('actionId ->', actionId);

                switch (actionId) {
                    case 'import':
                        dispatch({ type: 'IMPORT_SITE', source: 'json' });
                        break;
                    case 'importStarterKit':
                        dispatch({ type: 'IMPORT_SITE', source: 'starterKit' });
                        break;
                    case 'importJson':
                        dispatch({ type: 'IMPORT_SITE', source: 'json' });
                        break;
                    case 'download':
                        dispatch({ type: 'EXPORT_SITE' });
                        break;
                    case 'status':
                        dispatch({
                            type: 'CHANGE_PAGE_STATUS',
                            pageId: data?.item?.id,
                        });
                        break;
                }
            },
        }),
        []
    );

    return (
        <Pages
            data={pages}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};
