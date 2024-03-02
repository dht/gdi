import React from 'react';
import { Item, Title, Wrapper } from './IconGrid.style';
import Icon from '../Icon/Icon';
import { sortBy } from 'shared-base';

export type IconGridProps = {
  onClick: (icon: Json) => void;
  icons: Json[];
};

export function IconGrid(props: IconGridProps) {
  const { icons = [] } = props;

  function renderIcon(icon: Json) {
    const { name, iconName } = icon;
    return (
      <Item key={icon.id} className='icon' onClick={() => props.onClick(icon)}>
        <Icon size={30} name={iconName} color='rgba(255,255,255,0.5)' />
        <Title>{name}</Title>
      </Item>
    );
  }

  function renderIcons() {
    return icons //
      .sort(sortBy('order'))
      .map((icon: Json) => renderIcon(icon));
  }

  return (
    <Wrapper className='IconGrid-wrapper' data-testid='IconGrid-wrapper'>
      {renderIcons()}
    </Wrapper>
  );
}

export default IconGrid;
