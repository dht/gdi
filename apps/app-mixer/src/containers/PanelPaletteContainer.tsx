import React from 'react';
import Palette from '../components/Palette/Palette';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

export const PanelPaletteContainer = () => {
    const dispatch = useDispatch();
    const paletteOptions = useSelector(selectors.raw.$rawLibraryPalettes);
    const selectedPaletteId = useSelector(selectors.raw.$rawMixerState).paletteId; // prettier-ignore

    function onSelect(id: string) {
        console.log('id ->', id);

        dispatch(
            actions.mixerState.patch({
                paletteId: id,
            })
        );
    }

    return (
        <Palette
            selectedPaletteId={selectedPaletteId}
            options={Object.values(paletteOptions)}
            onSelect={onSelect}
        />
    );
};
