import React from 'react';
import { createContext } from 'react';
import { emptyFilters, emptyForm } from '../definitions/empty';
import { ICrudOptions, ICrudState, WithChildren } from '../types';
import { SelectionContext } from './Selection.context';
import { useCrudOperations } from '../hooks/useCrudOperations';
import { useLocalStorage } from 'react-use';
import { useMemo, useRef, useContext } from '@gdi/hooks';
import { get } from 'shared-base';

type CrudContextProps = {
    id: string;
    config: ICrudDefinitions;
    options: ICrudOptions;
    data: Json;
    callbacks: {
        onSelectionChange: (ids: string[]) => void;
        onDrillDown: (itemId: string) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
};

type ICrudContext = {
    patchState: (change: Partial<ICrudState>) => void;
    config: ICrudDefinitions;
    options: ICrudOptions;
    state: ICrudState;
    callbacks: {
        onAction: (actionId: string, data?: Json) => void;
        onItemAction: (id: string, actionId: string, data?: Json) => void;
    };
};

const initialValue = (params: Json): ICrudContext => ({
    patchState: () => {},
    state: {
        viewMode: params.initialViewMode,
    },
    config: {
        nodeName: '',
        table: { fields: [], id: '' },
        formNew: { ...emptyForm },
        formNewDefault: {},
        formEdit: { ...emptyForm },
        filters: { ...emptyFilters },
        multiBar: {},
    },
    options: {
        doubleClickActionId: 'edit',
    },
    callbacks: {
        onAction: (actionId: string) => {},
        onItemAction: (id: string, actionId: string, data?: Json) => {},
    },
});

export const CrudContext = createContext<ICrudContext>(initialValue({}));

export const CrudContextProvider = (props: WithChildren<CrudContextProps>) => {
    const { id, config, options, data, callbacks } = props;
    const { state: selectedIds, callbacks: callbacksSelection } = useContext(SelectionContext); // prettier-ignore

    const lastMousePoint = useRef<Json | undefined>({});

    const doubleClickActionId = get(config, 'multiBar.doubleClickActionId', 'drillDown'); // prettier-ignore
    const initialViewMode = get(config, 'multiBar.initialViewMode', 'table'); // prettier-ignore

    const configValue = useMemo(
        () => ({
            ...initialValue({ initialViewMode }),
            config,
            options,
        }),
        []
    );

    const localStorageKey = `CRUD_CONTEXT_${id}`;

    const [state, patchState] = useLocalStorage<ICrudState>(localStorageKey, {
        ...configValue.state,
    });

    const crudCallbacks = useCrudOperations(config, data, options);

    const callbacksCrud = useMemo(
        () => ({
            onAction: (actionId: string, data?: Json) => {
                switch (actionId) {
                    case 'new':
                        crudCallbacks.createForm();
                        break;
                    case 'newWithData':
                        crudCallbacks.create(data);
                        break;
                    case 'edit':
                        crudCallbacks.editForm(selectedIds);
                        break;
                    case 'editWithData':
                        crudCallbacks.edit(data);
                        break;
                    case 'delete':
                        crudCallbacks.deleteForm(selectedIds);
                        break;
                    default:
                        callbacks.onCustomAction(actionId, data);
                        break;
                }
            },
            onItemAction: (id: string, actionId: string, data?: Json) => {
                if (actionId === 'drillDown') {
                    actionId = doubleClickActionId;
                }

                switch (actionId) {
                    case 'edit':
                        crudCallbacks.editForm(id);
                        break;
                    case 'delete':
                        crudCallbacks.deleteForm(id);
                        break;
                    case 'drillDown':
                        if (callbacks.onDrillDown) {
                            callbacks.onDrillDown(id);
                        }
                        break;
                    case 'change':
                        if (!data) {
                            return;
                        }
                        crudCallbacks.change(id, data);
                        break;
                    case 'addTag':
                        if (!data) {
                            return;
                        }
                        crudCallbacks.addTag(id, data);
                        break;
                    case 'removeTag':
                        if (!data) {
                            return;
                        }
                        crudCallbacks.removeTag(id, data);
                        break;
                    case 'addDataTags':
                        if (!data) {
                            return;
                        }
                        crudCallbacks.addDataTag(id, data);
                        break;
                    case 'removeDataTags':
                        if (!data) {
                            return;
                        }
                        crudCallbacks.removeDataTag(id, data);
                        break;
                    case 'replaceDataTags':
                        if (!data) {
                            return;
                        }
                        crudCallbacks.replaceDataTags(id, data);
                        break;
                    case 'mouse':
                        lastMousePoint.current = data;
                        break;
                    case 'pie':
                        callbacksSelection.onFocusedSet(id);
                        crudCallbacks
                            .showMenu(id, lastMousePoint.current)
                            .then(() => {
                                callbacksSelection.onFocusedClear();
                            });
                        break;
                    case 'duplicate':
                        crudCallbacks.duplicate(id);
                        break;
                }
            },
        }),
        [state, selectedIds, options, crudCallbacks]
    );

    const cValue = useMemo(
        () => ({
            ...configValue,
            state,
            patchState,
            callbacks: callbacksCrud,
        }),
        [configValue, state, patchState, crudCallbacks]
    ) as ICrudContext;

    return (
        <CrudContext.Provider value={cValue}>
            {props.children}
        </CrudContext.Provider>
    );
};
