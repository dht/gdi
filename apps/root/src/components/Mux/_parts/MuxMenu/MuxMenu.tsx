import React from 'react';
import { Item, Title, Wrapper } from './MuxMenu.style';
import { Icon } from '@gdi/ui';
import { items } from './MuxMenu.data';

export type MuxMenuProps = {};

export function MuxMenu(_props: MuxMenuProps) {
  function renderItem(item: Json) {
    const { icon, title } = item;
    return (
      <Item key={item.id} className='item'>
        <Icon name={icon} />
        <Title>{title}</Title>
      </Item>
    );
  }

  function renderItems() {
    return items.map((item: Json) => renderItem(item));
  }
  return (
    <Wrapper className='MuxMenu-wrapper' data-testid='MuxMenu-wrapper'>
      {renderItems()}
    </Wrapper>
  );
}

export default MuxMenu;
