import React from 'react';
import { IDndItem } from '../../Trello.types';
import { Container } from './Item.style';
import classnames from 'classnames';

export type ItemProps = {
  item?: IDndItem;
  isSelected?: boolean;
  children?: React.ReactNode;
  color?: string;
};

export function Item(props: ItemProps) {
  const { item, isSelected } = props;
  const { color = 'purple' } = item ?? {};

  const className = classnames('Item-container', {
    selected: isSelected,
  });

  const style: React.CSSProperties = {
    borderLeft: `7px solid ${color}`,
  };

  function renderInner() {
    if (props.children) {
      return props.children;
    }

    const { title = '' } = item ?? {};

    return <div className='title'>{title}</div>;
  }

  return (
    <Container className={className} data-testid='Item-container' style={style}>
      {renderInner()}
    </Container>
  );
}

export type ItemComponent = React.FC<ItemProps>;

export default Item;
