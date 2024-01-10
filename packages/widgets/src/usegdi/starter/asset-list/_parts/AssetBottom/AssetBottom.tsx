import React from 'react';
import { Command, Wrapper } from './AssetBottom.style';
import { items } from './AssetBottom.data';

export type AssetBottomProps = {
  onAction: (id: string) => void;
};

export function AssetBottom(props: AssetBottomProps) {
  function renderItem(item: Json) {
    const { title, shortKey } = item;

    return (
      <Command key={item.id} className='command' onClick={() => props.onAction(shortKey)}>
        {shortKey} {title}
      </Command>
    );
  }

  function renderItems() {
    return items.map((item: Json) => renderItem(item));
  }

  return (
    <Wrapper className='AssetBottom-wrapper' data-testid='AssetBottom-wrapper'>
      {renderItems()}
    </Wrapper>
  );
}

export default AssetBottom;
