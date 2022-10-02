import React, { useContext, useMemo } from 'react';
import { createContext } from 'react';
import { emptyFilters } from '../definitions/filters/empty';
import { emptyForm } from '../definitions/forms/empty';
import { ICrudOptions, ICrudState, WithChildren } from '../types';
import { SelectionContext } from './Selection.context';
import { useCrudOperations } from '../hooks/useCrudOperations';
import { useSetState } from 'react-use';

type CrudContextProps = {
    config: ICrudDefinitions;
    options: ICrudOptions;
    data: Json;
    callbacks: {
        onSelectionChange: (ids: string[]) => void;
        onDrillDown: (itemId: string) => void;
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

const initialValue: ICrudContext = {
    patchState: () => {},
    state: {
        viewMode: 'gallery',
    },
    config: {
        nodeName: '',
        table: { fields: [], id: '' },
        formNew: { ...emptyForm },
        formNewDefault: {},
        formEdit: { ...emptyForm },
        filters: { ...emptyFilters },
    },
    options: {
        doubleClickActionId: 'edit',
    },
    callbacks: {
        onAction: (actionId: string) => {},
        onItemAction: (id: string, actionId: string, data?: Json) => {},
    },
};

export const CrudContext = createContext<ICrudContext>(initialValue);

export const CrudContextProvider = (props: WithChildren<CrudContextProps>) => {
    const { config, options, data, callbacks } = props;
    const { state: selectedIds } = useContext(SelectionContext);

    const configValue = useMemo(
        () => ({
            ...initialValue,
            config,
            options,
        }),
        []
    );

    const [state, patchState] = useSetState<ICrudState>({
        ...initialValue.state,
    });

    const crudCallbacks = useCrudOperations(config, data);

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
                    case 'delete':
                        crudCallbacks.deleteForm(selectedIds);
                        break;
                    default:
                        console.log(actionId);
                        break;
                }
            },
            onItemAction: (id: string, actionId: string, data?: Json) => {
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
                }
            },
        }),
        [state, selectedIds]
    );

    return (
        <CrudContext.Provider
            value={{
                ...configValue,
                state,
                patchState,
                callbacks: callbacksCrud,
            }}
        >
            {props.children}
        </CrudContext.Provider>
    );
};
