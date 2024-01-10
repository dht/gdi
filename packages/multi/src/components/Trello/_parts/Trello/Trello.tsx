import { useContext, useEffect, useMemo, useRef } from 'react';
import { IDndItems, IDndList, IDndLists, IDndOptions } from '../../Trello.types';
import { DndCallbacksOuter, DndContext, DndContextProvider } from '../../_context/Dnd.context';
import { usePosition } from '../../_hooks';
import TrelloList from '../TrelloList/TrelloList';
import { Container } from './Trello.style';
// import Dev from '../Dev/Dev';

export type TrelloProps = {
  id: string;
  lists: IDndLists;
  items: IDndItems;
  options?: IDndOptions;
  callbacks: DndCallbacksOuter;
  isRtl?: boolean;
};

export function TrelloInner(props: TrelloProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { lists, items = {} } = props;
  const context = useContext(DndContext);
  const { movableItemId } = context.state;

  const position = usePosition(ref);

  useEffect(() => {
    context.patchState({
      containerPosition: position,
    });
  }, [position]);

  const itemMirror = useMemo(() => {
    return Object.values(items).find((i) => i.id === movableItemId);
  }, [movableItemId]);

  function renderList(list: IDndList) {
    const listItems = Object.values(items).filter((item) => item.listId === list.id);

    return <TrelloList key={list.id} list={list} items={listItems} itemMirror={itemMirror} />;
  }

  function renderLists() {
    return Object.values(lists).map((list: IDndList) => renderList(list));
  }
  return (
    <Container ref={ref} className='Trello-container' data-testid='Trello-container'>
      {renderLists()}
    </Container>
  );
}

export function Trello(props: TrelloProps) {
  const { id, lists, items, callbacks, options = {} } = props;

  return (
    <DndContextProvider id={id} lists={lists} items={items} options={options} callbacks={callbacks}>
      <TrelloInner {...props} />
    </DndContextProvider>
  );
}

export default Trello;
