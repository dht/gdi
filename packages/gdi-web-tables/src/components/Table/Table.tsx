import React from 'react';
import { Container, Content, Row } from './Table.style';
import TableHeader from '../TableHeader/TableHeader';
import { ITableConfig, ITableField } from '../../types';
import TableCell from '../TableCell/TableCell';
import { TableContextProvider } from './Table.context';
import TableTop from '../TableTop/TableTop';
import TableFilters from '../TableFilters/TableFilters';
import TableBase from '../TableBase/TableBase';

export type TableProps = {
    config: ITableConfig;
    data: Json[];
    onRowClick: (item: any) => void;
};

export function Table(props: TableProps) {
    const { config, data } = props;
    const { fields = [] } = config;

    function renderField(field: ITableField, dataRow: Json, index: number) {
        return (
            <TableCell
                index={index}
                key={field.id}
                field={field}
                data={dataRow}
            />
        );
    }

    function renderFields(dataRow: Json) {
        return fields.map((field: ITableField, index: number) =>
            renderField(field, dataRow, index)
        );
    }

    function renderRow(rowProps: any) {
        const { item } = rowProps;

        return (
            <Row
                key={item.id}
                className='TableRow-container'
                data-testid='TableRow-container'
                onClick={() => props.onRowClick(item)}
            >
                {renderFields(item)}
            </Row>
        );
    }

    return (
        <TableContextProvider>
            <Container
                className='Table-container'
                data-testid='Table-container'
            >
                <TableTop />
                <TableFilters />
                <TableHeader config={config} />
                <Content>
                    <TableBase
                        autoHeight={true}
                        itemHeight={80}
                        data={data}
                        mode={'rows'}
                        emptyMessage={'empty'}
                    >
                        {renderRow}
                    </TableBase>
                </Content>
            </Container>
        </TableContextProvider>
    );
}

export default Table;
