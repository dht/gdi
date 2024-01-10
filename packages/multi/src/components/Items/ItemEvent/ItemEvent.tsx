import React, { useMemo } from 'react';
import { Location, LocationName, Description, Title, Time } from './ItemEvent.style';
import { ItemBase } from '../_ItemBase/ItemBase';
import { MasonryItemProps } from '../../Masonry/Masonry';
import { time } from '../../Table/Table.utils';
import { IEvent } from '../../../types';

export type ItemEventProps = MasonryItemProps & {
  item: IEvent;
};

export function ItemEvent(props: ItemEventProps) {
  const { item: event } = props;
  const { name, location, date } = event;

  const timeText = useMemo(() => {
    try {
      return time(date || '');
    } catch (err) {}
  }, []);

  return (
    <ItemBase {...props} backgroundColor='#000' topSectionHeight={200}>
      <Description className='description'>
        <Time>{timeText}</Time>
        <Title className='title'>{name}</Title>
        <Location className='author'>
          at <LocationName>{location}</LocationName>
        </Location>
      </Description>
    </ItemBase>
  );
}

export default ItemEvent;
