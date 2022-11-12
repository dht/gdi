import React, { FC, useCallback } from 'react';
import { Tags } from '@gdi/web-base-ui';
import { IOverlayField, ItemActionType } from '../../types';
import {
    Container,
    DateContainer,
    DateDate,
    DateDelta,
    Title,
} from './OverlayField.style';
import { dateShort, timeAgo } from '@gdi/language';
import { useMemo } from '@gdi/hooks';

export type OverlayFieldProps = {
    field: IOverlayField;
    item: Json;
    onAction: (actionId: ItemActionType, data?: Json) => void;
};

export function OverlayField(props: OverlayFieldProps) {
    const { field } = props;
    const { fieldType } = field;

    const Cmp = map[fieldType];

    return (
        <Container
            className='OverlayField-container'
            data-testid='OverlayField-container'
        >
            <Cmp {...props} />
        </Container>
    );
}
export function FieldTags(props: OverlayFieldProps) {
    const { field, item } = props;

    const value = item[field.fieldId];

    const onDelete = useCallback(
        (tag: string) => {
            props.onAction('removeTag', {
                id: item.id,
                tag,
            });
        },
        [value]
    );

    return (
        <>
            <Tags size='small' tags={value} color='cyan' onDelete={onDelete} />
        </>
    );
}

export function FieldDate(props: OverlayFieldProps) {
    const { field, item } = props;

    let dateDate = '';
    let dateDelta = '';

    try {
        const date = new Date(item[field.fieldId]);
        dateDate = dateShort(date);
        dateDelta = timeAgo(date);
    } catch (err) {
        console.log('err ->', err);
    }

    return (
        <DateContainer>
            <DateDate>{dateDate}</DateDate>
            <DateDelta>{dateDelta}</DateDelta>
        </DateContainer>
    );
}

export function FieldText(props: OverlayFieldProps) {
    const { field, item } = props;

    const value = useMemo(() => {
        return item[field.fieldId];
    }, []);

    return (
        <>
            <Title>{value}</Title>
        </>
    );
}

const map: Record<FieldType, FC<OverlayFieldProps>> = {
    checkbox: FieldText,
    text: FieldText,
    choice: FieldText,
    date: FieldDate,
    tags: FieldTags,
    select: FieldText,
    hidden: FieldText,
    color: FieldText,
    number: FieldText,
    imageUpload: FieldText,
    boolean: FieldText,
    slider: FieldText,
    phone: FieldText,
    password: FieldText,
    paragraph: FieldText,
    email: FieldText,
    url: FieldText,
    barSelect: FieldText,
    details: FieldText,
};

export default OverlayField;
