import React from 'react';
import SheetHeaderCell from '../SheetHeaderCell/SheetHeaderCell';
import { Wrapper } from './SheetHeader.style';

export type SheetHeaderProps = {
    cells: IFormField[];
};

export function SheetHeader(props: SheetHeaderProps) {
    const { cells } = props;

    function renderCell(field: IFormField) {
        return <SheetHeaderCell key={field.id} field={field} />;
    }

    function renderCells() {
        return cells.map((field: IFormField) => renderCell(field));
    }

    return (
        <Wrapper
            className='SheetHeader-wrapper'
            data-testid='SheetHeader-wrapper'
        >
            <SheetHeaderCell key='id' field={idField} />
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

export default SheetHeader;
