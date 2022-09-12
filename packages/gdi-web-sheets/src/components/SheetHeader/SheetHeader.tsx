import React from 'react';
import SheetHeaderCell from '../SheetHeaderCell/SheetHeaderCell';
import { Container } from './SheetHeader.style';

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
        <Container
            className='SheetHeader-container'
            data-testid='SheetHeader-container'
        >
            <SheetHeaderCell key='id' field={idField} />
            {renderCells()}
        </Container>
    );
}

const idField: IFormField = {
    id: 'id',
    fieldType: 'text',
    groupId: '',
    label: 'id',
};

export default SheetHeader;
