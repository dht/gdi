import React from 'react';
import { DndCallbacks } from '../../_context/Dnd.context';
import { IDndItem } from '../../Trello.types';
import { Container } from './TrelloItemEdit.style';
import classnames from 'classnames';
import ContentEditable from '../ContentEditable/ContentEditable';

export type TrelloItemEditProps = {
  item: IDndItem;
  callbacks: DndCallbacks;
};

export function TrelloItemEdit(props: TrelloItemEditProps) {
  const { item, callbacks } = props;
  const { title } = item;

  function onSave(value: string) {
    callbacks.onEditDone(item.id, value);
  }

  function onCancel() {
    callbacks.onEditCancel(item.id);
  }

  const className = classnames('TrelloItemEdit-container');

  return (
    <Container className={className} data-testid='TrelloItemEdit-container'>
      <ContentEditable
        placeholder='Enter a title'
        defaultValue={title}
        onSave={onSave}
        onCancel={onCancel}
        autoFocus
      />
    </Container>
  );
}

export default TrelloItemEdit;
