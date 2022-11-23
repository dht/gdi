import React, { useContext } from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';
import { ISiteContext } from '../types';
import { useSiteMenu } from '../hooks/useSiteMenu';

const initialState: ISiteContext = {
    menuItems: [],
    datasets: {},
    patchContext: () => {},
};

export const SiteContext = createContext<ISiteContext>(initialState); // prettier-ignore

type SiteProps = {
    children: JSX.Element | JSX.Element[];
    elements: IElement[];
    datasets: Json;
};

export const SiteContextProvider = (props: SiteProps) => {
    const { elements, datasets } = props;

    const [state, patchState] = useSetState<ISiteContext>({
        ...initialState,
    });

    const menuItems = useSiteMenu(elements);

    return (
        <SiteContext.Provider
            value={{
                ...state,
                menuItems,
                datasets,
                patchContext: patchState,
            }}
        >
            {props.children}
        </SiteContext.Provider>
    );
};
