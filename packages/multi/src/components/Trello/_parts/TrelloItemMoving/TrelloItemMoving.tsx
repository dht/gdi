import React, { useMemo } from 'react';
import { Container } from './TrelloItemMoving.style';
import { DndCallbacks } from '../../_context/Dnd.context';
import { IDndBox, IDndItem, IDndPoint } from '../../Trello.types';
import { useMouseMove, useMouseUp } from '../../_hooks';
import Item from '../Item/Item';

export type TrelloItemMovingProps = {
  item: IDndItem;
  callbacks: DndCallbacks;
  box: IDndBox;
  startPoint: IDndPoint;
  containerPosition: IDndPoint;
};

export function TrelloItemMoving(props: TrelloItemMovingProps) {
  const { item, callbacks, box, startPoint, containerPosition } = props;
  const delta = useMouseMove(true, startPoint);

  const style: React.CSSProperties = useMemo(() => {
    const left = box.x - containerPosition.x;
    const top = box.y - containerPosition.y;

    return {
      transform: `translateX(${delta.x}px) translateY(${delta.y}px) scale(1.06)`,
      left: `${left}px`,
      top: `${top}px`,
      width: box.width + 'px',
      height: box.height + 'px',
    };
  }, [delta]);

  useMouseUp(
    true,
    (ev: React.MouseEvent<HTMLDivElement>) => {
      callbacks.onMoveEnd({
        itemId: item.id,
        ev,
        point: { x: ev.clientX, y: ev.clientY },
      });
    },
    [callbacks]
  );

  return (
    <Container data-testid='TrelloItem-container' style={style}>
      <Item item={item} />
    </Container>
  );
}

export default TrelloItemMoving;
