import React from 'react';
import { Container, Content, Row } from './DataGrid.style';
import { DataGridBase } from './base/DataGridBase';
import DataGridHeader from './TableHeader/TableHeader';
import { DataGridConfig, DataGridField } from '../../types';
import DataGridCell from './TableCell/TableCell';
import { DataGridContextProvider } from './DataGrid.context';
import DataGridTop from './TableTop/TableTop';
import DataGridFilters from './TableFilters/TableFilters';

export type DataGridProps = {
    config: DataGridConfig;
    data: Json[];
    onRowClick: (item: any) => void;
};

export function DataGrid(props: DataGridProps) {
    const { config, data } = props;
    const { fields = [] } = config;

    function renderField(field: DataGridField, dataRow: Json, index: number) {
        return (
            <DataGridCell
                index={index}
                key={field.id}
                field={field}
                data={dataRow}
            />
        );
    }

    function renderFields(dataRow: Json) {
        return fields.map((field: DataGridField, index: number) =>
            renderField(field, dataRow, index)
        );
    }

    function renderRow(rowProps: any) {
        const { item } = rowProps;

        return (
            <Row
                key={item.id}
                className='DataGridRow-container'
                data-testid='DataGridRow-container'
                onClick={() => props.onRowClick(item)}
            >
                {renderFields(item)}
            </Row>
        );
    }

    return (
        <DataGridContextProvider>
            <Container
                className='DataGrid-container'
                data-testid='DataGrid-container'
            >
                <DataGridTop />
                <DataGridFilters />
                <DataGridHeader config={config} />
                <Content>
                    <DataGridBase
                        autoHeight={true}
                        itemHeight={80}
                        data={data}
                        emptyMessage={'empty'}
                    >
                        {renderRow}
                    </DataGridBase>
                </Content>
            </Container>
        </DataGridContextProvider>
    );
}

export default DataGrid;
