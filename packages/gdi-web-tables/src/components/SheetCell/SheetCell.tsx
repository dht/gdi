import React, { FC } from 'react';
import { Wrapper } from './SheetCell.style';
import classnames from 'classnames';
import { Coords } from '../../types';
import { useLanguage } from '@gdi/language';

export type SheetCellProps = {
    value: string | number | boolean;
    field: IFormField;
    rowData: Json;
    coords: Coords;
    readOnly?: boolean;
    className?: string;
    title?: string;
};

export function SheetCell(props: SheetCellProps) {
    const { readOnly, field } = props;
    const { fieldType } = field;

    const className = classnames('SheetCell-wrapper', 'cell', props.className, {
        readOnly,
    });

    console.log('fieldType ->', fieldType);

    const Cmp = map[fieldType];

    if (!Cmp) {
        return null;
    }

    return <Cmp {...props} className={className} />;
}

export function SheetCellText(props: SheetCellProps) {
    const { value, className, title } = props;

    return (
        <Wrapper
            title={title}
            className={className}
            data-testid='SheetCell-wrapper'
        >
            {value}
        </Wrapper>
    );
}

export function SheetCellDate(props: SheetCellProps) {
    const { value, className } = props;

    console.log('value ->', value);

    return (
        <Wrapper className={className} data-testid='SheetCell-wrapper'>
            {value}
        </Wrapper>
    );
}

export function SheetCellMoney(props: SheetCellProps) {
    const { value, className } = props;
    const { m } = useLanguage();

    const valueText = isNaN(parseFloat(value as string))
        ? '-'
        : m.full(value as number);

    return (
        <Wrapper className={className} data-testid='SheetCell-wrapper'>
            {valueText}
        </Wrapper>
    );
}

const map: Record<FieldType, FC<SheetCellProps>> = {
    checkbox: SheetCellText,
    text: SheetCellText,
    choice: SheetCellText,
    date: SheetCellDate,
    tags: SheetCellText,
    select: SheetCellText,
    hidden: SheetCellText,
    color: SheetCellText,
    number: SheetCellText,
    money: SheetCellMoney,
    dataset: SheetCellText,
    icon: SheetCellText,
    imageUpload: SheetCellText,
    boolean: SheetCellText,
    slider: SheetCellText,
    phone: SheetCellText,
    password: SheetCellText,
    paragraph: SheetCellText,
    email: SheetCellText,
    url: SheetCellText,
    barSelect: SheetCellText,
    details: SheetCellText,
};

export default SheetCell;
