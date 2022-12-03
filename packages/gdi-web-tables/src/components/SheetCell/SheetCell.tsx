import React from 'react';
import { Wrapper } from './SheetCell.style';
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

    const className = classnames('SheetCell-wrapper', 'cell', props.className, {
        readOnly,
    });

    return (
        <Wrapper className={className} data-testid='SheetCell-wrapper'>
            {value}
        </Wrapper>
    );
}

export default SheetCell;
