import React from 'react';
import { Container } from './TableRow.style';
import classnames from 'classnames';
import TableCell from '../TableCell/TableCell';
import TableRowActions from '../TableRowActions/TableRowActions';
import { ITableRowAction } from '../../types';

export type TableRowProps = {
    item: Json;
    fields?: ITableField[];
    isSelected: boolean;
    onClick?: () => void;
    onDoubleClick?: () => void;
    onRowAction: (actionId: string) => void;
    rowActions?: ITableRowAction[];
};

export function TableRow(props: TableRowProps) {
    const { item, fields = [], rowActions = [], isSelected } = props;

    const className = classnames('TableRow-container', {
        selected: isSelected,
    });

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

    return (
        <Container
            data-testid='TableRow-container'
            className={className}
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}
        >
            {renderFields(item)}
            <TableRowActions
                actions={rowActions}
                onRowAction={props.onRowAction}
            />
        </Container>
    );
}

export default TableRow;
