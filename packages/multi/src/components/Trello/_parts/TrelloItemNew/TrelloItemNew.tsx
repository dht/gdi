import React, { useRef } from 'react';
import classnames from 'classnames';
import ContentEditable from '../ContentEditable/ContentEditable';
import Item from '../Item/Item';
import { Container } from './TrelloItemNew.style';
import { DndCallbacks } from '../../_context/Dnd.context';
import { useEnter } from '../../_hooks';

export type TrelloItemNewProps = {
  listId: string;
  callbacks: DndCallbacks;
  isMoving?: boolean;
  isSelected?: boolean;
  isEditable?: boolean;
  index: number;
};

export function TrelloItemNew(props: TrelloItemNewProps) {
  const { isMoving, isSelected, isEditable, listId, index } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { callbacks } = props;

  const className = classnames('TrelloItemNew-container', {
    moving: isMoving,
    selected: isSelected,
  });

  function onSave(value: string) {
    callbacks.onNewDone(listId, value);
  }

  function onCancel() {
    callbacks.onNewCancel(listId);
  }

  function renderInner() {
    if (!isEditable) {
      return <div className='title'>Add a new item</div>;
    }

    return (
      <ContentEditable
        placeholder='Add a new item'
        onSave={onSave}
        onCancel={onCancel}
        autoFocus
        clearOnSave
        readOnly={!isSelected}
      />
    );
  }

  useEnter(() => {
    if (isSelected && !isEditable) {
      callbacks.onNewStart(listId);
    }
  }, [isSelected, isEditable]);

  function onMouseOver(ev: React.MouseEvent<HTMLDivElement>) {
    callbacks.onMouseOver({
      index,
      ev,
      point: { x: ev.clientX, y: ev.clientY },
    });
  }

  return (
    <Container
      ref={ref}
      className={className}
      data-testid='TrelloItemNew-container'
      onMouseOver={onMouseOver}
      onMouseDown={() =>
        callbacks.onSelect({
          itemId: `NEW_${listId}`,
          point: { x: 0, y: 0 },
          ev: {} as any,
        })
      }
      onTouchStart={() =>
        callbacks.onSelect({
          itemId: `NEW_${listId}`,
          point: { x: 0, y: 0 },
          ev: {} as any,
        })
      }
    >
      <Item isSelected={isSelected}>{renderInner()}</Item>
    </Container>
  );
}

export default TrelloItemNew;
