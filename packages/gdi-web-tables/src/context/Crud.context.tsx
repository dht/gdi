import React, { useMemo } from 'react';
import { createContext } from 'react';
import { emptyFilters } from '../definitions/filters/empty';
import { emptyForm } from '../definitions/forms/empty';
import { ICrudOptions, ICrudState, WithChildren } from '../types';
import { useSetState } from 'react-use';

type CrudContextProps = {
    config: ICrudDefinitions;
    options: ICrudOptions;
    callbacks: {
        onAction: (actionId: string) => void;
        onDrillDown?: (itemId: string) => void;
        onSave: (id: string, data: Json) => Promise<boolean>;
        onNew: (data: Json) => void;
        onDelete: (id: string) => void;
    };
};

type ICrudContext = {
    patchState: (change: Partial<ICrudState>) => void;
    config: ICrudDefinitions;
    options: ICrudOptions;
    state: ICrudState;
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (
            id: string | string[],
            actionId: string,
            data?: Json
        ) => void;
        onNewFormSave: (data: Json) => void;
        onEditFormSave: (change: Json) => void;
    };
};

const initialValue: ICrudContext = {
    patchState: () => {},
    state: {
        viewMode: 'table',
        showNewForm: false,
        showEditForm: false,
        editFormItemId: '',
    },
    config: {
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
        onNewFormSave: (data: Json) => {},
        onEditFormSave: (change: Json) => {},
    },
};

export const CrudContext = createContext<ICrudContext>(initialValue);

export const CrudContextProvider = (props: WithChildren<CrudContextProps>) => {
    const { config, options, callbacks } = props;

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

    const { showNewForm, showEditForm, editFormItemId } = state;

    let formConfig: IFormConfig | undefined;
    let formData: Json | undefined;

    const callbacksCrud = useMemo(
        () => ({
            onAction: (actionId: string) => {
                switch (actionId) {
                    case 'new':
                        patchState({
                            showNewForm: true,
                        });
                        break;
                    default:
                        if (callbacks.onAction) {
                            callbacks.onAction(actionId);
                        }
                        break;
                }
            },
            onItemAction: (id: string, actionId: string) => {
                switch (actionId) {
                    case 'edit':
                        patchState({
                            showEditForm: true,
                            editFormItemId: id,
                        });
                        break;
                    case 'delete':
                        callbacks.onDelete(id);
                        break;
                    case 'drillDown':
                        if (callbacks.onDrillDown) {
                            callbacks.onDrillDown(id);
                        }
                        break;
                }
            },
            onNewFormSave: (data: Json) => {
                patchState({ showNewForm: false });
                return callbacks.onNew(data);
            },
            onEditFormSave: (change: Json) => {
                patchState({ editFormItemId: '', showEditForm: false });
                return callbacks.onSave(editFormItemId, change);
            },
        }),
        [state]
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
