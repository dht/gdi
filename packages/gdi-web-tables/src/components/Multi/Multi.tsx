import React, { FC, useContext, useMemo } from 'react';
import FilterBar from '../FilterBar/FilterBar';
import Sheet from '../Sheet/Sheet';
import Table from '../Table/Table';
import Timeline from '../Timeline/Timeline';
import { AnyGallery } from '../Galleries';
import { Container } from './Multi.style';
import { CrudContext, CrudContextProvider } from '../../context/Crud.context';
import { DispatchContextProvider } from '../../context/Dispatch.context';
import { FullCalendar } from '@gdi/web-base-ui';
import { ItemType } from '../../types';
import { MultiViews } from './Multi.views';
import { SelectionContextProvider } from '../../context/Selection.context';
import {
    FilterContext,
    FilterContextProvider,
} from '../../context/Filter.context';
import Buckets from '../Buckets/Buckets';

export type MultiProps = {
    id: string;
    data: Json[];
    itemType: ItemType;
    header?: string;
    definitions: ICrudDefinitions;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    tools?: IOption[];
    allOptions?: Json;
    customView?: FC<any>;
    customView2?: FC<any>;
    dispatch: any;
    viewModes?: IViewMode[];
    initialViewMode?: IViewMode;
    hideParts?: FilterPart[];
    allMethods?: any;
};

export function MultiInner(props: MultiProps) {
    const {
        definitions,
        allOptions,
        customView: CustomView,
        customView2: CustomView2,
        viewModes,
        header,
        itemType,
        tools,
        hideParts,
    } = props;

    const contextFilter = useContext(FilterContext);
    const contextCrud = useContext(CrudContext);

    const { data = [] } = contextFilter;
    const { state, patchState, callbacks, config } = contextCrud;

    const customViewExists = typeof CustomView !== 'undefined';
    const customView2Exists = typeof CustomView2 !== 'undefined';

    const isCustomView = state.viewMode === 'custom' || state.viewMode === 'custom2'; // prettier-ignore

    function onChangeViewMode(viewMode: string) {
        patchState({ viewMode: viewMode as any });
        document.location.hash = viewMode;
    }

    function renderInner() {
        switch (state.viewMode) {
            case 'table':
                return (
                    <Table
                        config={config.table}
                        data={data}
                        onAction={callbacks.onAction}
                        onRowAction={callbacks.onItemAction}
                    />
                );
            case 'spreadsheet':
                if (!config.sheet) {
                    return null;
                }

                return (
                    <Sheet
                        config={config.sheet}
                        data={data}
                        allOptions={allOptions}
                        onChange={(itemId: string, change: Json) =>
                            callbacks.onItemAction(itemId, 'change', change)
                        }
                        onDelete={(itemId: string) =>
                            callbacks.onItemAction(itemId, 'delete')
                        }
                        onNew={(data: Json) => {
                            callbacks.onAction('newWithData', data);
                        }}
                    />
                );
            case 'gallery':
                return (
                    <AnyGallery
                        itemType={itemType}
                        definitions={definitions}
                        options={{}}
                        items={data as any}
                        callbacks={callbacks}
                    />
                );
            case 'calendar':
                return <FullCalendar />;
            case 'timeline':
                return <Timeline />;
            case 'buckets':
                return (
                    <Buckets
                        config={config.bucket}
                        data={data}
                        onMove={(
                            itemId: string,
                            toListId: string,
                            order: number
                        ) => {
                            console.log(
                                'itemId, toListId, order ->',
                                itemId,
                                toListId,
                                order
                            );
                        }}
                        onEdit={(itemId: string, value: string) => {
                            console.log('itemId, value ->', itemId, value);
                        }}
                        onNew={(
                            listId: string,
                            value: string,
                            order: number
                        ) => {
                            console.log(listId, value, order);
                        }}
                        onDelete={(itemId: string) => {
                            console.log('itemId ->', itemId);
                        }}
                        onEditList={(listId: string, value: string) => {
                            console.log('listId, value ->', listId, value);
                        }}
                    />
                );
            case 'custom':
                if (!CustomView) {
                    return null;
                }

                return <CustomView />;
            case 'custom2':
                if (!CustomView2) {
                    return null;
                }

                return <CustomView2 />;
        }
    }

    return (
        <Container className='Multi-container' data-testid='Multi-container'>
            <FilterBar
                header={(header || config.table.header) ?? ''}
                tools={tools}
                onAction={callbacks.onAction}
                hideParts={hideParts}
            />
            {renderInner()}
            <MultiViews
                modes={viewModes}
                value={state.viewMode}
                customViewExists={customViewExists}
                customView2Exists={customView2Exists}
                onChange={(option: SwitchOption) => onChangeViewMode(option.id)}
            />
        </Container>
    );
}

export const Multi = (props: MultiProps) => {
    const {
        id,
        data,
        callbacks,
        allOptions,
        dispatch,
        initialViewMode,
        definitions,
        allMethods = {},
    } = props;

    const optionsFilter = useMemo(() => ({}), []);

    const optionsCrud = useMemo(
        () => ({
            doubleClickActionId: 'drillDown',
            allOptions,
            allDetails: {},
            allMethods,
        }),
        [allMethods]
    );

    return (
        <DispatchContextProvider dispatch={dispatch}>
            <SelectionContextProvider
                mode={'browse'}
                initialValue={[]}
                onSelectionChange={callbacks.onSelectionChange}
            >
                <FilterContextProvider
                    data={data}
                    config={definitions.filters}
                    options={optionsFilter}
                    allOptions={allOptions}
                >
                    <CrudContextProvider
                        id={id}
                        data={data}
                        config={definitions}
                        options={optionsCrud}
                        callbacks={callbacks}
                        initialViewMode={initialViewMode}
                    >
                        <MultiInner {...props} />
                    </CrudContextProvider>
                </FilterContextProvider>
            </SelectionContextProvider>
        </DispatchContextProvider>
    );
};

export default Multi;
