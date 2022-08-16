import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import Tools from '../components/Tools/Tools';
import { IToolbarItem } from '../components/Tools/Tools.items';

export const ToolsContainer = () => {
    const dispatch = useDispatch();
    const selectedToolId = useSelector(
        selectors.raw.$rawMixerState
    ).selectedToolId;

    const onClick = useCallback((option: IToolbarItem) => {
        dispatch(actions.appStateMixer.patch({ selectedToolId: option.id }));
    }, []);

    return <Tools selectedItemId={selectedToolId} onClick={onClick} />;
};
