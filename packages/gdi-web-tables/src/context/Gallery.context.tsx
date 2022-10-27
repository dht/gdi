import React, { useContext, useMemo } from 'react';
import { createContext } from 'react';
import { FilterContext } from './Filter.context';
import { IItem } from '../components/Masonry/Masonry';
import { useSetState } from 'react-use';
import {
    IGalleryConfig,
    IGalleryOptions,
    IGalleryState,
    IOverlayConfig,
    ItemActionType,
    WithChildren,
} from '../types';
import { SelectionContext } from './Selection.context';

type GalleryContextProps = {
    config: IGalleryConfig;
    configOverlay: IOverlayConfig;
    options: IGalleryOptions;
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: ItemActionType, data?: Json) => void;
    };
};

type IGalleryContext = {
    patchState: (change: Partial<IGalleryState>) => void;
    config: IGalleryConfig;
    configOverlay: IOverlayConfig;
    options: IGalleryOptions;
    state: IGalleryState;
    callbacks: {
        onClick: (id: string, item: IItem) => void;
        onDoubleClick: (id: string) => void;
        onAction: (actionId: ItemActionType, data?: Json) => void;
        onMouseEvent: (ev: MouseEv) => void;
    };
};

const initialValue: IGalleryContext = {
    patchState: () => {},
    state: {},
    config: { id: '' },
    configOverlay: { id: '', fields: [] } as any,
    options: {
        columns: 3,
        selectionMode: 'browse',
    },
    callbacks: {
        onClick: (id: string, item: IItem) => {},
        onDoubleClick: (id: string) => {},
        onAction: (actionId: ItemActionType, data?: Json) => {},
        onMouseEvent: (ev: MouseEv) => {},
    },
};

export const GalleryContext = createContext<IGalleryContext>(initialValue);

export const GalleryContextProvider = (
    props: WithChildren<GalleryContextProps>
) => {
    const { config, configOverlay, options, callbacks } = props;

    const filterContext = useContext(FilterContext);
    const { state: filterState } = filterContext;
    const { tag } = filterState;
    const { callbacks: callbacksSelect, state: selectedIds } =
        useContext(SelectionContext);

    const columns =
        options.columns || config.columns || initialValue.options.columns;

    const configValue = useMemo(
        () => ({
            ...initialValue,
            config,
            configOverlay,
            options: {
                ...initialValue.options,
                ...options,
                columns,
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
                if (tag) {
                    const actionId = item.tags.includes(tag)
                        ? 'removeTag'
                        : 'addTag';

                    callbacks.onItemAction(id, actionId, {
                        tag,
                    });

                    return;
                }

                callbacksSelect.onSelect(id);
            },

            onDoubleClick: (id: string) => {
                callbacks.onItemAction(id, 'drillDown');
            },
            onAction: (actionId: ItemActionType, data?: Json) => {
                // props.onAction(actionId, data);
            },
            onMouseEvent: (ev: MouseEv) => {
                const data = {
                    x: ev.clientX,
                    y: ev.clientY,
                };

                callbacks.onItemAction('', 'mouse', data);
            },
        }),
        [state, selectedIds, tag]
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
