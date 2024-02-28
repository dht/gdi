import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ContextRecipe } from './ContextRecipe';

export type ContextRecipeContainerProps = {};

export function ContextRecipeContainer(_props: ContextRecipeContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <ContextRecipe />;
}

export default ContextRecipeContainer;
