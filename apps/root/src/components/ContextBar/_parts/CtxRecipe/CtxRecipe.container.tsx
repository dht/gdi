import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { CtxRecipe } from './CtxRecipe';

export type CtxRecipeContainerProps = {};

export function CtxRecipeContainer(_props: CtxRecipeContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <CtxRecipe />;
}

export default CtxRecipeContainer;
