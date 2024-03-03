import React from 'react';
import { Item, Title, Wrapper } from './Menu.style';
import { Icon } from '@gdi/ui';
import { items } from './Menu.data';
import { invokeEvent } from 'shared-base';
import classnames from 'classnames';
import { getSelectedIndex } from './Menu.utils';

export type MenuProps = {
  minimal?: boolean;
};

export function Menu(props: MenuProps) {
  const { minimal } = props;
  const filteredItems = items.filter((item) => !item.isHidden);

  function onClick(item: Json) {
    const { path } = item;
    invokeEvent('nav', { path });
  }

  const selectedIndex = getSelectedIndex(filteredItems);

  function renderItem(item: Json, index: number) {
    const { icon, title } = item;

    const className = classnames('item', {
      selected: index === selectedIndex,
    });

    return (
      <Item key={item.id} className={className} onMouseDown={() => onClick(item)}>
        <Icon name={icon} />
        {!minimal && <Title>{title}</Title>}
      </Item>
    );
  }

  function renderItems() {
    return filteredItems.map((item: Json, index) => renderItem(item, index));
  }
  return (
    <Wrapper className='Menu-wrapper' data-testid='Menu-wrapper'>
      {renderItems()}
    </Wrapper>
  );
}

export default Menu;
