import { IElement } from '@gdi/store-mixer';
import React, { useContext } from 'react';
import { createContext, useEffect } from 'react';
import { useSetState } from 'react-use';
import { ISiteContext } from '../types';
import { EngineContext } from './Engine.context';
import { set } from 'lodash';
import { useSiteMenu } from '../hooks/useSiteMenu';

const initialState: ISiteContext = {
    menuItems: [],
    patchContext: () => {},
};

export const SiteContext = createContext<ISiteContext>(initialState); // prettier-ignore

type SiteProps = {
    children: JSX.Element | JSX.Element[];
    elements: IElement[];
};

export const SiteContextProvider = (props: SiteProps) => {
    const { elements } = props;

    const [state, patchState] = useSetState<ISiteContext>({
        ...initialState,
    });

    const menuItems = useSiteMenu(elements);

    return (
        <SiteContext.Provider
            value={{
                ...state,
                menuItems,
                patchContext: patchState,
            }}
        >
            {props.children}
        </SiteContext.Provider>
    );
};
