import React, { useContext, useMemo } from 'react';
import TrelloListHeader from '../TrelloListHeader/TrelloListHeader';
import { Container } from './TrelloList.style';
import { DndContext } from '../../_context/Dnd.context';
import { IDndItem, IDndList } from '../../Trello.types';
import { sortBy } from 'shared-base';
import { TrelloItem } from '../TrelloItem/TrelloItem';
import { TrelloItemMoving } from '../TrelloItemMoving/TrelloItemMoving';
import { TrelloItemNew } from '../TrelloItemNew/TrelloItemNew';

export type TrelloListProps = {
  list: IDndList;
  items: IDndItem[];
  itemMirror?: IDndItem;
};

export function TrelloList(props: TrelloListProps) {
  const { list, itemMirror } = props;
  const { title } = list;
  const { callbacks, state } = useContext(DndContext);

  const {
    editableItemId,
    movableItemId,
    selectedItemId,
    destinationIndex,
    destinationListId,
    movingBox,
    editableNewId,
    startPoint,
    containerPosition,
    growMirror,
  } = state;

  const items = useMemo(() => {
    return props.items.sort(sortBy('order'));
  }, [props.items]);

  const isMoving = movableItemId !== '';
  const isSameList = list.id === destinationListId;
  const mirrorExists = isMoving && itemMirror && isSameList;

  const NEW_KEY = `NEW_${list.id}`;

  const itemsWithoutMoving = useMemo(() => {
    return items.filter((i) => i.id !== movableItemId);
  }, [items]);

  function renderMirror(elements: any[]) {
    return (
      <TrelloItem //
        key={`mirror_${itemMirror?.id}`}
        index={elements.length}
        item={itemMirror!}
        callbacks={callbacks}
        grow={growMirror}
        className='mirror'
      />
    );
  }

  function renderItems() {
    let elements: JSX.Element[] = [];

    let index = 0;

    for (index = 0; index < itemsWithoutMoving.length; index++) {
      const item = itemsWithoutMoving[index];

      const isSelected = selectedItemId === item.id;
      const isEditable = editableItemId === item.id;

      if (index === destinationIndex && mirrorExists) {
        elements.push(renderMirror(elements));
      }

      elements.push(
        <TrelloItem
          key={item.id}
          item={item}
          index={elements.length}
          callbacks={callbacks}
          isSelected={isSelected}
          isEditable={isEditable}
        />
      );
    }

    if (index === destinationIndex && mirrorExists) {
      elements.push(renderMirror(elements));
    }

    elements.push(
      <TrelloItemNew
        key={NEW_KEY}
        listId={list.id}
        index={elements.length}
        callbacks={callbacks}
        isMoving={isMoving}
        isSelected={selectedItemId === NEW_KEY}
        isEditable={editableNewId === NEW_KEY}
      />
    );

    return elements;
  }

  function renderMovable() {
    const item = items.find((i) => i.id === movableItemId);

    if (!item) {
      return;
    }

    return (
      <TrelloItemMoving
        key={item.id}
        item={item}
        callbacks={callbacks}
        box={movingBox}
        startPoint={startPoint}
        containerPosition={containerPosition}
      />
    );
  }

  function onMouseOver(ev: React.MouseEvent<HTMLDivElement>) {
    callbacks.onMouseOverList({
      listId: list.id,
      ev,
      point: { x: ev.clientX, y: ev.clientY },
    });
  }

  function onSave(value: string) {
    callbacks.onEditList(list.id, value);
  }

  return (
    <Container
      className='TrelloList-container'
      data-testid='TrelloList-container'
      onMouseOver={onMouseOver}
    >
      <TrelloListHeader title={title} onSave={onSave} />
      {renderItems()}
      {renderMovable()}
    </Container>
  );
}

export default TrelloList;
