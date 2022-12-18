import React, { useMemo } from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';
import { useSiteMenu } from '../hooks/useSiteMenu';
import { invokeEvent } from 'shared-base';
import { IGaData, ISiteState, ITopMenuItem } from '../types';

type SiteProps = {
    children: JSX.Element | JSX.Element[];
    elements: IElement[];
    datasets: Json;
};

export type ISiteContext = {
    menuItems: ITopMenuItem[];
    datasets: Json;
    state: ISiteState;
    ga: (eventId: GaId, data: IGaData) => void;
    gan: (eventId: GaId, data: IGaData) => void; // non-interactive
    patchState: (change: Partial<ISiteState>) => void;
};

const initialValue: ISiteContext = {
    menuItems: [],
    datasets: {},
    state: {
        analyticsOn: true,
    },
    patchState: () => {},
    ga: (_eventId: GaId, _data: IGaData) => {},
    gan: (_eventId: GaId, _data: IGaData) => {}, // non-interactive
};

export const SiteContext = createContext<ISiteContext>(initialValue); // prettier-ignore

export const SiteContextProvider = (props: SiteProps) => {
    const { elements, datasets } = props;

    const [state, patchState] = useSetState<ISiteState>({
        ...initialValue.state,
    });

    const menuItems = useSiteMenu(elements);

    const callbacks = useMemo(
        () => ({
            ga: (eventId: GaId, data: IGaData) => {
                if (!state.analyticsOn) {
                    return;
                }

                invokeEvent('ga', { eventId, data });
            },
            gan: (eventId: GaId, data: IGaData) => {
                if (!state.analyticsOn) {
                    return;
                }

                invokeEvent('ga', { eventId, data, nonInteractive: true });
            },
        }),
        [state]
    );

    const cValue = useMemo(
        () => ({
            state,
            menuItems,
            datasets,
            ga: callbacks.ga,
            gan: callbacks.gan,
            patchState,
        }),
        [state, menuItems, datasets, callbacks, patchState]
    );

    return (
        <SiteContext.Provider value={cValue}>
            {props.children}
        </SiteContext.Provider>
    );
};
