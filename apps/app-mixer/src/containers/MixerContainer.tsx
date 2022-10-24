import React, { useMemo } from 'react';
import Mixer from '../components/Mixer/Mixer';
import { actions, selectors } from '../store';
import { invokeEvent } from 'shared-base';
import { MixerStructureContainer } from './MixerStructureContainer';
import { MixerVisualContainer } from './MixerVisualContainer';
import { ModalContentContainer } from './modals/ModalContentContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';

export const MixerContainer = () => {
    const dispatch = useDispatch();

    const pages = useSelector(selectors.tables.$libraryPages);
    const page = useSelector(selectors.base.$page);
    const allOptions = useSelector(selectors.options.$allOptions);

    useMount(() => {
        dispatch({ type: 'SELECT_PAGE_INSTANCE_ON_NAVIGATION' });
    });

    const { title = '' } = page ?? {};

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                // console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, _data?: Json) => {
                switch (actionId) {
                    case 'editPage':
                        dispatch({ type: 'EDIT_PAGE' });
                        break;
                    case 'duplicateInstance':
                        dispatch({ type: 'PROMOTE_PAGE_INSTANCE' });
                        break;
                    case 'promoteInstance':
                        dispatch({ type: 'PROMOTE_PAGE_INSTANCE' });
                        break;
                    case 'editInstance':
                        dispatch({ type: 'DELETE_PAGE_INSTANCE' });
                        break;
                    case 'resetInstance':
                        dispatch({ type: 'RESET_PAGE_INSTANCE' });
                        break;
                    case 'versions':
                        dispatch(
                            actions.appStateMixer.patch({
                                showMixerTree: true,
                            })
                        );
                        break;
                    case 'preview':
                        popup = window.open(
                            document.location.origin + '/preview',
                            '_blank'
                        );
                        break;
                    case 'download':
                        dispatch({ type: 'EXPORT_SITE' });
                        break;
                }
            },
        }),
        []
    );

    return (
        <>
            <ModalContentContainer />
            <Mixer
                header={title}
                data={pages}
                callbacks={callbacks}
                allOptions={allOptions}
                dispatch={dispatch}
                customView={MixerVisualContainer}
                customView2={MixerStructureContainer}
            />
        </>
    );
};
