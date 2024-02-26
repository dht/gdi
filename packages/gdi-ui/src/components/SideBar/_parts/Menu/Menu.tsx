import React from 'react';
import { Item, Title, Wrapper } from './Menu.style';
import { Icon } from '@gdi/ui';
import { items } from './Menu.data';
import { invokeEvent } from 'shared-base';
import classnames from 'classnames';
import { getSelectedIndex } from './Menu.utils';

export type MenuProps = {};

export function Menu(_props: MenuProps) {
  function onClick(item: Json) {
    const { path } = item;
    invokeEvent('nav', { path });
  }

  const selectedIndex = getSelectedIndex(items);

  function renderItem(item: Json, index: number) {
    const { icon, title } = item;

    const className = classnames('item', {
      selected: index === selectedIndex,
    });

    return (
      <Item key={item.id} className={className} onMouseDown={() => onClick(item)}>
        <Icon name={icon} />
        <Title>{title}</Title>
      </Item>
    );
  }

  function renderItems() {
    return items.map((item: Json, index) => renderItem(item, index));
  }
  return (
    <Wrapper className='Menu-wrapper' data-testid='Menu-wrapper'>
      {renderItems()}
    </Wrapper>
  );
}

export default Menu;
