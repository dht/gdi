import React, { useContext, useMemo } from 'react';
import FilterBar from '../FilterBar/FilterBar';
import Timeline from '../Timeline/Timeline';
import { AnyGallery } from '../Galleries';
import { Container } from './Multi.style';
import { CrudContext, CrudContextProvider } from '../../context/Crud.context';
import { definitions as allDefinitions } from '../../definitions';
// import { FullCalendar } from '@gdi/web-base-ui';
import { ItemType } from '../../types';
import { MultiViews } from './Multi.views';
import {
    FilterContext,
    FilterContextProvider,
} from '../../context/Filter.context';
import { SelectionContextProvider } from '../../context/Selection.context';
import allOptions from './allOptions.json';
import Table from '../Table/Table';

export type MultiProps = {
    id: string;
    data: Json[];
    itemType: ItemType;
    allOptions?: Json;
};

export function MultiInner(_props: any) {
    const contextFilter = useContext(FilterContext);
    const contextCrud = useContext(CrudContext);

    const { data = [] } = contextFilter;
    const { state, patchState, callbacks, config, options } = contextCrud;

    function renderInner() {
        switch (state.viewMode) {
            case 'table':
                return (
                    <Table
                        config={config.table}
                        data={data}
                        onAction={callbacks.onAction}
                        onRowAction={callbacks.onItemAction}
                        doubleClickActionId={options.doubleClickActionId}
                    />
                );
            case 'spreadsheet':
                // return <Sheet />;
                return <div>sheets</div>;
            case 'gallery':
                return (
                    <AnyGallery
                        flavour='article'
                        items={data as any}
                        callbacks={callbacks}
                    />
                );
            // case 'calendar':
            // return <FullCalendar />;
            case 'timeline':
                return <Timeline />;
            case 'custom':
                return <div>Custom</div>;
        }
    }

    return (
        <Container className='Multi-container' data-testid='Multi-container'>
            <FilterBar header='Articles' />
            {renderInner()}
            <MultiViews
                value={state.viewMode}
                onChange={(option) =>
                    patchState({ viewMode: option.id as any })
                }
            />
        </Container>
    );
}

export const Multi = (props: MultiProps) => {
    const { data, itemType } = props;

    const definitions = useMemo(() => {
        return allDefinitions[itemType];
    }, [itemType]);

    const optionsFilter = useMemo(() => ({}), []);

    const optionsCrud = useMemo(
        () => ({
            doubleClickActionId: 'drillDown',
            allOptions,
            allDetails: {},
            allMethods: {},
        }),
        []
    );

    const callbacks = useMemo(
        () => ({
            onAction: (actionId: string, data?: Json) => {
                console.log('onAction actionId ->', actionId, data);
            },
            onItemAction: (actionId: string, id: string, data?: Json) => {
                console.log(
                    'onItemAction actionId, id, data ->',
                    actionId,
                    id,
                    data
                );
            },
            onSave: (id: string, data: Json) => {
                console.log('save ->', id, data);
                return Promise.resolve(true);
            },
            onNew: (data: Json) => {
                console.log('new ->', data);
            },
            onDelete: (id: string | string[]) => {
                console.log('delete id ->', id);
            },
            onSelectionChange: (ids: string[]) => {
                console.log('ids ->', ids);
            },
        }),
        []
    );

    return (
        <SelectionContextProvider
            mode={'browse'}
            initialValue={[]}
            onSelectionChange={callbacks.onSelectionChange}
        >
            <FilterContextProvider
                data={data}
                config={definitions.filters}
                options={optionsFilter}
                callbacks={callbacks}
                allOptions={allOptions}
            >
                <CrudContextProvider
                    config={definitions}
                    options={optionsCrud}
                    callbacks={callbacks}
                >
                    <MultiInner />
                </CrudContextProvider>
            </FilterContextProvider>
        </SelectionContextProvider>
    );
};

export default Multi;

/*

 dispatch: (action: Action) => void;
    nodes: INodeWithColor[];
    sheetConfig: IFormConfig | null;
    sheetData: Json[];
    confirm: (promptRequest: any) => Promise<{ didCancel: boolean }>;
    onSelectNode: (nodeId: string) => void;
    currentNodeId: string;
*/
