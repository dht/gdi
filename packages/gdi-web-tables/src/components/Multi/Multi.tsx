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
import PreviewModal from '../PreviewModal/PreviewModal';

export type MultiProps = {
    id: string;
    data: Json[];
    itemType: ItemType;
    header?: string;
    definitions: ICrudDefinitions;
    callbacks: {
        onDrillDown: (itemId: string, point?: Json) => void;
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
    newDataExtra?: Json;
    doubleClickActionId?: string;
    tags?: IOptions;
};

export function MultiInner(props: MultiProps) {
    const {
        id,
        definitions,
        allOptions,
        customView: CustomView,
        customView2: CustomView2,
        viewModes,
        header,
        itemType,
        tools,
        hideParts,
        initialViewMode,
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
                        callbacks={callbacks}
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

    function renderPreview() {
        if (!contextFilter.state.showPreview) {
            return null;
        }

        return (
            <PreviewModal
                id={id}
                data={data}
                itemType={itemType}
                onClose={() => contextFilter.callbacks.togglePreview()}
            />
        );
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
            {renderPreview()}
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
        newDataExtra = {},
        doubleClickActionId = 'drillDown',
        tags = [],
    } = props;

    const optionsFilter = useMemo(() => ({}), []);

    const optionsCrud = useMemo(
        () => ({
            doubleClickActionId,
            allOptions,
            allDetails: {},
            allMethods,
            newDataExtra,
        }),
        [allMethods]
    );

    return (
        <DispatchContextProvider dispatch={dispatch}>
            <SelectionContextProvider
                mode={'none'}
                initialValue={[]}
                onSelectionChange={callbacks.onSelectionChange}
            >
                <FilterContextProvider
                    data={data}
                    config={definitions.filters}
                    options={optionsFilter}
                    allOptions={allOptions}
                    tags={tags}
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
