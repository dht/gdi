import React, { useMemo } from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';

type ICrudContext = {
    patchState: (change: Partial<ICrudContext>) => void;
    tableConfig: ITableConfig;
    tableData?: Json[];
    showNewForm: boolean;
    showEditForm: boolean;
    editFormItemId: string;
    formConfig?: IFormConfig;
    formData?: Json;
    doubleClickActionId?: string;
    header?: string;
    callbacks: {
        onAction: (actionId: string) => void;
        onRowAction: (id: string, actionId: string) => void;
        onNewFormSave: (data: Json) => void;
        onEditFormSave: (change: Json) => void;
    };
};

const initialState: ICrudContext = {
    tableConfig: {
        id: '',
        header: '',
        fields: [],
    },
    tableData: [],
    showNewForm: false,
    showEditForm: false,
    editFormItemId: '',
    doubleClickActionId: 'edit',
    header: '',
    callbacks: {
        onAction: (actionId: string) => {},
        onRowAction: (id: string, actionId: string) => {},
        onNewFormSave: (data: Json) => {},
        onEditFormSave: (change: Json) => {},
    },
    patchState: () => {},
};

export const CrudContext = createContext<ICrudContext>(initialState);

export type CrudProps = ICrudDefinitions & {
    data: Json[];
    callbacks: {
        onAction: (actionId: string) => void;
        onDrillDown?: (itemId: string) => void;
        onSave: (id: string, data: Json) => Promise<boolean>;
        onNew: (data: Json) => void;
        onDelete: (id: string) => void;
    };
    children: React.FC<any>;
    doubleClickActionId?: string;
    header?: string;
    allOptions?: Json;
    allDetails?: AllDetails;
    allMethods?: AllMethods;
};

export const CrudContextProvider = (props: CrudProps) => {
    const {
        tableConfig,
        data,
        editForm,
        newForm,
        callbacks,
        doubleClickActionId,
        allDetails,
        allMethods,
        allOptions,
        dataNewDefault = {},
        header,
    } = props;

    const [state, patchState] = useSetState<ICrudContext>({
        ...initialState,
    });

    const { showNewForm, showEditForm, editFormItemId } = state;

    let formConfig: IFormConfig | undefined;
    let formData: Json | undefined;

    if (showNewForm) {
        formConfig = newForm;
        formData = dataNewDefault;
    } else if (showEditForm && editFormItemId) {
        formConfig = editForm;
        formData = data.find((i) => i.id === editFormItemId);
    }

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
            onRowAction: (id: string, actionId: string) => {
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

    const Cmp = props.children;

    return (
        <CrudContext.Provider
            value={{
                ...state,
                tableData: data,
                tableConfig,
                formConfig,
                formData,
                callbacks: callbacksCrud,
                doubleClickActionId,
                header,
                patchState,
            }}
        >
            <Cmp
                allDetails={allDetails}
                allMethods={allMethods}
                allOptions={allOptions}
            />
        </CrudContext.Provider>
    );
};
