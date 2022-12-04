import React, { useEffect } from 'react';
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
import { useMemo, useContext } from '@gdi/hooks';

type GalleryContextProps = {
    config: IGalleryConfig;
    configOverlay: IOverlayConfig;
    options: IGalleryOptions;
    callbacks: {
        onAction: (actionId: string, data?: Json) => void;
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
        selectionMode: 'none',
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
                    const { tags = [] } = item;

                    if (tags.includes(tag)) {
                        return;
                    }

                    callbacks.onItemAction(id, 'addTag', {
                        tag,
                    });

                    return;
                }

                if (filterState.toolId === 'edit') {
                    callbacks.onItemAction(id, 'edit');
                } else if (filterState.toolId === 'delete') {
                    callbacks.onItemAction(id, 'delete');
                } else if (filterState.toolId === 'duplicate') {
                    callbacks.onItemAction(id, 'duplicate');
                }

                callbacksSelect.onSelect(id);
            },

            onDoubleClick: (id: string) => {
                callbacks.onItemAction(id, 'drillDown');
            },
            onAction: (actionId: ItemActionType, data?: Json) => {
                switch (actionId) {
                    case 'addTag':
                        callbacks.onItemAction(data?.id, actionId, data);
                        break;
                    case 'removeTag':
                        callbacks.onItemAction(data?.id, actionId, data);
                        break;
                    default:
                        callbacks.onAction(actionId, data);
                }
            },
            onMouseEvent: (ev: MouseEv) => {
                const data = {
                    x: ev.clientX,
                    y: ev.clientY,
                };

                callbacks.onItemAction('', 'mouse', data);
            },
        }),
        [state, selectedIds, tag, filterState.toolId]
    );

    const cValue = useMemo(
        () => ({
            ...configValue,
            state,
            patchState,
            callbacks: callbacksGallery,
        }),
        [configValue, state, patchState, callbacksGallery]
    );

    return (
        <GalleryContext.Provider value={cValue}>
            {props.children}
        </GalleryContext.Provider>
    );
};
