import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { FlexProperties } from '../components/FlexProperties/FlexProperties';

type FlexPropertiesContainer = {
    onClose?: () => void;
};

export const FlexPropertiesContainer = (props: FlexPropertiesContainer) => {
    const dispatch = useDispatch();
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const flexEntity = useSelector(selectors.base.$flexEntity);

    const { layoutId, flexEntityId } = currentIds;

    const callbacks = useMemo(
        () => ({
            onClose: () => {
                if (props.onClose) {
                    props.onClose();
                }
            },
            onStyleSave: (styleData: Json) => {
                dispatch(
                    actions.layouts.patchItem(layoutId, flexEntityId, {
                        style: styleData,
                    })
                );
            },
            onPropsSave: (propsData: Json) => {
                dispatch(
                    actions.layouts.patchItem(layoutId, flexEntityId, {
                        props: propsData,
                    })
                );
            },
        }),
        [layoutId, flexEntityId]
    );

    return <FlexProperties flexEntity={flexEntity} callbacks={callbacks} />;
};
