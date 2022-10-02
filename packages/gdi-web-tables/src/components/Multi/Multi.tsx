import React, { FC, useContext, useMemo } from 'react';
import FilterBar from '../FilterBar/FilterBar';
import Sheet from '../Sheet/Sheet';
import Table from '../Table/Table';
import Timeline from '../Timeline/Timeline';
import { AnyGallery } from '../Galleries';
import { Container } from './Multi.style';
import { CrudContext, CrudContextProvider } from '../../context/Crud.context';
import { definitions as allDefinitions } from '../../definitions';
import { DispatchContextProvider } from '../../context/Dispatch.context';
import { FullCalendar } from '@gdi/web-base-ui';
import { ItemType } from '../../types';
import { MultiViews } from './Multi.views';
import { SelectionContextProvider } from '../../context/Selection.context';
import {
    FilterContext,
    FilterContextProvider,
} from '../../context/Filter.context';

export type MultiProps = {
    id: string;
    data: Json[];
    itemType: ItemType;
    definitions: ICrudDefinitions;
    allOptions?: Json;
    customView?: FC<any>;
    dispatch: any;
};

export function MultiInner(props: MultiProps) {
    const { allOptions, customView: CustomView } = props;
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
                return (
                    <Sheet
                        config={config.formEdit}
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
                        flavour='article'
                        options={{ columns: 5 }}
                        items={data as any}
                        callbacks={callbacks}
                    />
                );
            case 'calendar':
                // return <div>calendar</div>;
                return <FullCalendar />;
            case 'timeline':
                return <Timeline />;
            case 'custom':
                if (!CustomView) {
                    return null;
                }

                return <CustomView />;
        }
    }

    return (
        <Container className='Multi-container' data-testid='Multi-container'>
            <FilterBar header='Articles' onAction={callbacks.onAction} />
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
    const { data, itemType, allOptions, dispatch } = props;

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
            onDrillDown: (itemId: string) => {
                console.log('drillDown ->', itemId);
            },
            onSelectionChange: (ids: string[]) => {
                console.log('ids ->', ids);
            },
        }),
        []
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
                        data={data}
                        config={definitions}
                        options={optionsCrud}
                        callbacks={callbacks}
                    >
                        <MultiInner {...props} />
                    </CrudContextProvider>
                </FilterContextProvider>
            </SelectionContextProvider>
        </DispatchContextProvider>
    );
};

export default Multi;
