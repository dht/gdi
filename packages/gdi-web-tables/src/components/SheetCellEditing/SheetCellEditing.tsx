import React, { useContext, useEffect, useRef } from 'react';
import { Container } from './SheetCellEditing.style';
import { useEnter, useEscape } from '@gdi/hooks';
import { Coords } from '../../types';
import { useCustomEvent } from '@gdi/hooks';
import { format } from 'date-fns';
import { SheetContext } from '../../context/Sheet.context';

export type SheetCellEditingProps = {
    value: string | number | boolean;
    field: IFormField;
    rowData: Json;
    coords: Coords;
    readOnly?: boolean;
    className?: string;
};

export function SheetCellEditing(props: SheetCellEditingProps) {
    const context = useContext(SheetContext);
    const ref = useRef<HTMLInputElement>(null);

    const { value, field, rowData } = props;

    useEffect(() => {
        const input = ref.current;

        if (!input) {
            return;
        }

        context.patchState({
            savedValue: value,
            isNoneEmptyCell: !isEmpty(value),
        });

        input.focus();

        const selection = window.getSelection();

        if (selection) {
            selection.selectAllChildren(input);
        }
    }, []);

    useCustomEvent('STOP_EDITING', () => {
        if (!ref.current) {
            return;
        }
        const currentValue = ref.current.innerText;

        // no change
        if (currentValue === value) {
            return;
        }

        const itemId = rowData['id'];
        const fieldId = field.id;
        const fieldType = field.fieldType;

        let parsedValue;

        switch (fieldType) {
            case 'number':
                parsedValue = parseFloat(currentValue);
                break;
            case 'date':
                parsedValue = parseDate(currentValue);
                break;
            default:
                parsedValue = currentValue;
        }

        // adhoc
        rowData[fieldId] = parsedValue;

        context.onChange(itemId, {
            [fieldId]: parsedValue,
        });
    });

    useEscape(() => {
        context.cancelEditing();
    }, []);

    useEnter((wrappedEvent: any) => {
        if (wrappedEvent.ev.shiftKey) {
            return;
        }

        context.stopEditing(true);
    }, []);

    return (
        <Container
            ref={ref}
            spellCheck={false}
            className='SheetCellEditing-container cell'
            data-testid='SheetCellEditing-container'
            contentEditable={true}
            placeholder='title'
            defaultValue={String(value)}
            suppressContentEditableWarning={true}
        >
            {value}
        </Container>
    );
}

export default SheetCellEditing;

const isEmpty = (value?: string | number | boolean) => {
    return typeof value === 'undefined' || value === '';
};

const parseDate = (value: string) => {
    try {
        const dateParts = value.split('.').map((i) => parseInt(i, 10));
        const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
        return format(date, 'yyyy-MM-dd');
    } catch (_err) {
        return value;
    }
};
