import React, { useContext, useMemo } from 'react';
import { createContext } from 'react';
import { FilterContext } from './Filter.context';
import { IItem } from '../components/Masonry/Masonry';
import { useSetState } from 'react-use';
import {
    IGalleryConfig,
    IGalleryOptions,
    IGalleryState,
    ItemActionType,
    WithChildren,
} from '../types';

type GalleryContextProps = {
    config: IGalleryConfig;
    options: IGalleryOptions;
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: ItemActionType, data?: Json) => void;
    };
};

type IGalleryContext = {
    patchState: (change: Partial<IGalleryState>) => void;
    config: IGalleryConfig;
    options: IGalleryOptions;
    state: IGalleryState;
    callbacks: {
        onClick: (id: string, item: IItem) => void;
        onDoubleClick: (id: string) => void;
        onAction: (actionId: ItemActionType, data?: Json) => void;
    };
};

const initialValue: IGalleryContext = {
    patchState: () => {},
    state: {},
    config: { id: '' },
    options: {
        columns: 3,
        doubleClickAction: 'edit',
        selectionMode: 'browse',
    },
    callbacks: {
        onClick: (id: string, item: IItem) => {},
        onDoubleClick: (id: string) => {},
        onAction: (actionId: ItemActionType, data?: Json) => {},
    },
};

export const GalleryContext = createContext<IGalleryContext>(initialValue);

export const GalleryContextProvider = (
    props: WithChildren<GalleryContextProps>
) => {
    const { config, options } = props;
    const filterContext = useContext(FilterContext);

    const configValue = useMemo(
        () => ({
            ...initialValue,
            config,
            options: {
                ...initialValue.options,
                ...options,
            },
        }),
        []
    );

    const [state, patchState] = useSetState<IGalleryState>({
        ...initialValue.state,
    });

    const callbacksGallery = useMemo(
        () => ({
            onClick: (id: string, item: IItem) => {
                // if (filterContext.state.tag) {
                // filterContext.tagItem(id, item);
                // return;
                // }
                // onSelectionClick(id);
            },

            onDoubleClick: (id: string) => {
                // if (selectedIds.length === 0) {
                // return;
                // }
                // const firstId = selectedIds[0];
                // props.onItemAction(firstId, 'edit');
            },
            onAction: (actionId: ItemActionType, data?: Json) => {
                // props.onAction(actionId, data);
            },
        }),
        [state]
    );

    return (
        <GalleryContext.Provider
            value={{
                ...configValue,
                ...state,
                patchState,
                callbacks: callbacksGallery,
            }}
        >
            {props.children}
        </GalleryContext.Provider>
    );
};
