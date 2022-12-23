import React, { useContext } from 'react';
import SheetCell from '../SheetCell/SheetCell';
import { Wrapper } from './SheetRow.style';
import classnames from 'classnames';
import SheetCellEditing from '../SheetCellEditing/SheetCellEditing';
import SheetCellSelected from '../SheetCellSelected/SheetCellSelected';
import { Coords } from '../../types';
import { SheetContext } from '../../context/Sheet.context';

export type SheetRowProps = {
    rowIndex: number;
    cells: any[];
    rowData: Json;
    isSelected?: boolean;
};

export function SheetRow(props: SheetRowProps) {
    const { rowIndex, cells, rowData, isSelected } = props;

    const context = useContext(SheetContext);

    function renderCell(field: IFormField, index: number) {
        const classNameCell = `row_${rowIndex}_col_${index}`;

        const isSelected =
            context.selectedCoords?.rowIndex === rowIndex &&
            context.selectedCoords?.columnIndex === index;

        const isEditable =
            context.editableCoords &&
            context.editableCoords.rowIndex === rowIndex &&
            context.editableCoords.columnIndex === index;

        const { id } = field;
        const value = rowData[id];

        const coords: Coords = {
            rowIndex,
            columnIndex: index,
        };

        const Cmp = isEditable
            ? SheetCellEditing
            : isSelected
            ? SheetCellSelected
            : SheetCell;

        return (
            <Cmp
                key={field.id + index}
                value={value}
                field={field}
                coords={coords}
                rowData={rowData}
                className={classNameCell}
            />
        );
    }

    function renderCells() {
        return cells.map((field: IFormField, index) =>
            renderCell(field, index)
        );
    }

    const className = classnames('SheetRow-wrapper', {
        selected: isSelected,
    });

    return (
        <Wrapper className={className} data-testid='SheetRow-wrapper'>
            <SheetCell
                key='id'
                value={rowData['id']}
                title={rowData['id']}
                field={idField}
                rowData={rowData}
                coords={{ rowIndex, columnIndex: -1 }}
                className={`row_${rowIndex}_col_-1 id`}
                readOnly
            />

            {renderCells()}
        </Wrapper>
    );
}

const idField: IFormField = {
    id: 'id',
    fieldType: 'text',
    groupId: '',
    label: 'id',
};

export default SheetRow;
