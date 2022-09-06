import React from 'react';
import { Container } from './SheetCell.style';
import classnames from 'classnames';
import { Coords } from '../../types';

export type SheetCellProps = {
    value: string | number | boolean;
    field: IFormField;
    rowData: Json;
    coords: Coords;
    readOnly?: boolean;
    className?: string;
};

export function SheetCell(props: SheetCellProps) {
    const { value, readOnly } = props;

    const className = classnames(
        'SheetCell-container',
        'cell',
        props.className,
        {
            readOnly,
        }
    );

    return (
        <Container className={className} data-testid='SheetCell-container'>
            {value}
        </Container>
    );
}

export default SheetCell;
