import React, { useContext } from 'react';
import Table from '../Table/Table';
import { Container } from './Crud.style';
import { FormModal } from '@gdi/web-ui';
import { CrudContext, CrudContextProvider, CrudProps } from './Crud.context';

type CrudInnerProps = {
    allOptions?: Json;
    allDetails?: AllDetails;
    allMethods?: AllMethods;
};

export function CrudInner(props: CrudInnerProps) {
    const { allOptions, allDetails, allMethods } = props;
    const context = useContext(CrudContext);
    const {
        tableConfig,
        tableData = [],
        showNewForm,
        showEditForm,
        formConfig,
        formData = {},
        callbacks,
        doubleClickActionId,
        header,
    } = context;

    function renderNewForm() {
        if (!showNewForm || !formConfig) {
            return null;
        }

        return (
            <FormModal
                title={formConfig.header}
                onClose={() => {
                    context.patchState({
                        showNewForm: false,
                    });
                }}
                config={formConfig}
                onSave={(_change: Json, allData: Json) =>
                    callbacks.onNewFormSave(allData)
                }
                data={formData}
                allOptions={allOptions}
                allDetails={allDetails}
                allMethods={allMethods}
            />
        );
    }

    function renderEditForm() {
        if (!showEditForm || !formConfig) {
            return null;
        }

        return (
            <FormModal
                title={formConfig.header}
                onClose={() => {
                    context.patchState({
                        showEditForm: false,
                        editFormItemId: '',
                    });
                }}
                config={formConfig}
                onSave={(change: Json) => callbacks.onEditFormSave(change)}
                data={formData}
                allOptions={allOptions}
                allDetails={allDetails}
                allMethods={allMethods}
            />
        );
    }

    return (
        <Container className='Crud-container' data-testid='Crud-container'>
            <Table
                config={tableConfig}
                header={header}
                data={tableData}
                onAction={callbacks.onAction}
                onRowAction={callbacks.onRowAction}
                doubleClickActionId={doubleClickActionId}
            />
            {renderNewForm()}
            {renderEditForm()}
        </Container>
    );
}

export function Crud(props: CrudProps) {
    return <CrudContextProvider {...props}>{CrudInner}</CrudContextProvider>;
}

export default Crud;
