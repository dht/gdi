import React, { useContext } from 'react';
import { Wrapper } from './SheetCellSelected.style';
import classnames from 'classnames';
import {
    useDelete,
    useEnter,
    useKey,
    useStartTyping,
    useCopyPaste,
} from '@gdi/hooks';
import { Coords } from '../../types';
import { SheetContext } from '../../context/Sheet.context';

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
        'SheetCellSelected-wrapper',
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

    useCopyPaste(
        () => {
            return value;
        },
        (clipboardValue?: string | number | boolean) => {
            if (typeof clipboardValue === 'undefined') {
                return;
            }

            const itemId = rowData['id'];
            const fieldId = field.id;

            context.onChange(itemId, {
                [fieldId]: clipboardValue,
            });
        },
        [value]
    );

    return (
        <Wrapper className={className} data-testid='SheetCellSelected-wrapper'>
            {value}
        </Wrapper>
    );
}

export default SheetCellSelected;
