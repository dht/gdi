import React, { FC } from 'react';
import Buckets from '../Buckets/Buckets';
import FilterBar from '../FilterBar/FilterBar';
import PreviewModal from '../PreviewModal/PreviewModal';
import Sheet from '../Sheet/Sheet';
import Table from '../Table/Table';
import Timeline from '../Timeline/Timeline';
import { AnyGallery } from '../Galleries';
import { CrudContext, CrudContextProvider } from '../../context/Crud.context';
import { DispatchContextProvider } from '../../context/Dispatch.context';
import { FullCalendar } from '@gdi/web-base-ui';
import { ItemType } from '../../types';
import { MultiViews } from './Multi.views';
import { SelectionContextProvider } from '../../context/Selection.context';
import { useContext, useMemo } from '@gdi/hooks';
import { Wrapper } from './Multi.style';
import {
    FilterContext,
    FilterContextProvider,
} from '../../context/Filter.context';

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
    allOptions?: Json;
    customView?: FC<any>;
    customView2?: FC<any>;
    allMethods?: any;
    newDataExtra?: Json;
    tags?: IOptions;
    dispatch: any;
};

export function MultiInner(props: MultiProps) {
    const {
        id,
        definitions,
        allOptions,
        customView: CustomView,
        customView2: CustomView2,
        itemType,
    } = props;

    const contextFilter = useContext(FilterContext);
    const contextCrud = useContext(CrudContext);

    const { data = [], multiBar } = contextFilter;
    const { state, patchState, callbacks, config } = contextCrud;

    const customViewExists = typeof CustomView !== 'undefined';
    const customView2Exists = typeof CustomView2 !== 'undefined';

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
                        config={config.bucket!}
                        data={data}
                        callbacks={callbacks as any}
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
        <Wrapper className='Multi-wrapper' data-testid='Multi-wrapper'>
            <FilterBar onAction={callbacks.onAction} />
            {renderInner()}
            {renderPreview()}
            <MultiViews
                modes={multiBar.viewModes}
                value={state.viewMode}
                customViewExists={customViewExists}
                customView2Exists={customView2Exists}
                onChange={(option: IOption) => onChangeViewMode(option.id)}
            />
        </Wrapper>
    );
}

export const Multi = (props: MultiProps) => {
    const {
        id,
        data,
        callbacks,
        allOptions,
        dispatch,
        definitions,
        tags = [],
    } = props;

    const optionsFilter = useMemo(() => ({}), []);

    const allMethods = useMemo(() => {
        return props.allMethods || {};
    }, [props.allMethods]);

    const newDataExtra = useMemo(() => {
        return props.newDataExtra || {};
    }, [props.newDataExtra]);

    const allDetails = useMemo(() => {
        return {};
    }, []);

    const optionsCrud = useMemo(
        () => ({
            allOptions,
            allDetails,
            allMethods,
            newDataExtra,
            doubleClickActionId: 'drillDown',
        }),
        [allMethods]
    );

    return (
        <DispatchContextProvider dispatch={dispatch}>
            <SelectionContextProvider
                initialMode='none'
                initialValue={[]}
                onSelectionChange={callbacks.onSelectionChange}
            >
                <FilterContextProvider
                    data={data}
                    config={definitions.filters}
                    multiBar={definitions.multiBar}
                    allOptions={allOptions}
                    options={optionsFilter}
                    tags={tags}
                >
                    <CrudContextProvider
                        id={id}
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
