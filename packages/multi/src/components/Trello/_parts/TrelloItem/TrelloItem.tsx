import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';
import TrelloItemEdit from '../TrelloItemEdit/TrelloItemEdit';
import { Container } from './TrelloItem.style';
import { DndCallbacks } from '../../_context/Dnd.context';
import { IDndBox, IDndItem } from '../../Trello.types';
import Item from '../Item/Item';

export type TrelloItemProps = {
  index: number;
  item: IDndItem;
  callbacks: DndCallbacks;
  className?: string;
  isSelected?: boolean;
  isEditable?: boolean;
  children?: JSX.Element | JSX.Element[];
  grow?: boolean;
};

export function TrelloItem(props: TrelloItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { index, item, callbacks, isSelected, isEditable, grow } = props;

  function onMouseOver(ev: React.MouseEvent<HTMLDivElement>) {
    callbacks.onMouseOver({
      index,
      ev,
      point: { x: ev.clientX, y: ev.clientY },
    });
  }

  function onMouseDown(ev: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) {
      return;
    }

    const box = ref.current.getBoundingClientRect();

    const movingBox: IDndBox = {
      x: box.left,
      y: box.top,
      width: box.width,
      height: box.height,
    };

    // relative to parent
    const point = { x: ev.clientX, y: ev.clientY };

    callbacks.onSelect({
      itemId: item.id,
      ev,
      point,
      box: movingBox,
    });
  }

  const className = classnames('TrelloItem-container', props.className, {
    grow,
  });

  return (
    <Container
      onMouseOver={onMouseOver}
      onMouseDown={onMouseDown}
      /* @ts-expect-error */
      onTouchStart={onMouseDown}
      className={className}
      data-testid='TrelloItem-container'
      key={item.id}
      ref={ref}
    >
      <Item item={item} isSelected={isSelected}>
        {isEditable && <TrelloItemEdit {...props} />}
      </Item>
    </Container>
  );
}

export default TrelloItem;
