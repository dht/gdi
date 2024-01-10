import React, { useState } from 'react';
import ContentEditable from '../ContentEditable/ContentEditable';
import { Container } from './TrelloListHeader.style';

export type TrelloListHeaderProps = {
  title: string;
  onSave: (value: string) => void;
};

export function TrelloListHeader(props: TrelloListHeaderProps) {
  const { title } = props;
  const [isEditing, setIsEditing] = useState(false);

  function onEditingStart() {
    setIsEditing(true);
  }

  function onEditingEnd(value: string) {
    props.onSave(value);
    setIsEditing(false);
  }

  function onEditingCancel() {
    setIsEditing(false);
  }

  function renderInner() {
    if (!isEditing) {
      return <div className='title'>{title}</div>;
    }

    return (
      <ContentEditable
        placeholder='Enter a title'
        defaultValue={title}
        onSave={onEditingEnd}
        onCancel={onEditingCancel}
        autoFocus
      />
    );
  }

  return (
    <Container
      className='TrelloListHeader-container'
      data-testid='TrelloListHeader-container'
      onDoubleClick={() => onEditingStart()}
    >
      {renderInner()}
    </Container>
  );
}

export default TrelloListHeader;
