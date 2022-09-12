import React, { useContext } from 'react';
import { Container } from './SheetCellSelected.style';
import classnames from 'classnames';
import { useDelete, useEnter, useKey, useStartTyping } from '@gdi/hooks';
import { SheetContext } from '../Sheet/Sheet.context';
import { Coords } from '../../types';

export type SheetCellSelectedProps = {
    value: string | number | boolean;
    field: IFormField;
    rowData: Json;
    coords: Coords;
    readOnly?: boolean;
    className?: string;
};

export function SheetCellSelected(props: SheetCellSelectedProps) {
    const { value, field, rowData, coords, readOnly } = props;

    const context = useContext(SheetContext);

    const className = classnames(
        'SheetCellSelected-container',
        'cell',
        props.className,
        {
            readOnly,
        }
    );

    useDelete(() => {
        const itemId = rowData['id'];
        const fieldId = field.id;

        // adhoc
        rowData[fieldId] = '';

        context.onChange(itemId, {
            [fieldId]: '',
        });
    }, []);

    useEnter((wrappedEvent: any) => {
        context.startEditing(coords);
        wrappedEvent.ev.preventDefault();
    }, []);

    useStartTyping(() => {
        context.startEditing(coords);
    }, []);

    useKey(
        () => {
            context.startEditing(coords);
        },
        { filterKeys: ['F2'] },
        []
    );

    return (
        <Container
            className={className}
            data-testid='SheetCellSelected-container'
        >
            {value}
        </Container>
    );
}

export default SheetCellSelected;
