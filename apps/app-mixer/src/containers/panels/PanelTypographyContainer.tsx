import React from 'react';
import Typography from '../../components/Typography/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';

export const PanelTypographyContainer = () => {
    const dispatch = useDispatch();
    const typographyOptions = useSelector(selectors.raw.$rawLibraryTypography);
    const selectedTypographyId = useSelector(selectors.raw.$rawFonts).typographyId; // prettier-ignore

    function onSelect(id: string) {
        dispatch(
            actions.fonts.patch({
                typographyId: id,
            })
        );
    }

    return (
        <Typography
            selectedTypographyId={selectedTypographyId}
            options={Object.values(typographyOptions)}
            onSelect={onSelect}
        />
    );
};
