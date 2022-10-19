import React, { useMemo } from 'react';
import {
    Location,
    LocationName,
    Description,
    Title,
    Time,
} from './ItemEvent.style';
import { ItemBase } from '../_ItemBase/ItemBase';
import { MasonryItemProps } from '../../../Masonry/Masonry';
import { format } from '@gdi/language';

export type ItemEventProps = MasonryItemProps & {
    item: IEvent;
};

export function ItemEvent(props: ItemEventProps) {
    const { item: event } = props;
    const { name, location, date } = event;

    const time = useMemo(() => {
        try {
            return format(new Date(date as any), 'HH:mm');
        } catch (err) {}
    }, []);

    return (
        <ItemBase {...props} backgroundColor='#000' topSectionHeight={200}>
            <Description className='description'>
                <Time>{time}</Time>
                <Title className='title'>{name}</Title>
                <Location className='author'>
                    at <LocationName>{location}</LocationName>
                </Location>
            </Description>
        </ItemBase>
    );
}

export default ItemEvent;
