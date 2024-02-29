import React from 'react';
import { Description, Item, Title, Wrapper } from './MuxInputGuidance.style';
import { data } from './MuxInputGuidance.data';

export type MuxInputGuidanceProps = {
  onSelect: (item: Json) => () => void;
};

export function MuxInputGuidance(props: MuxInputGuidanceProps) {
  function renderItem(item: Json) {
    const { title, description } = item;

    return (
      <Item key={item.id} className='item' onClick={() => props.onSelect(item)}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Item>
    );
  }

  function renderItems() {
    return data.map((item: Json) => renderItem(item));
  }

  return (
    <Wrapper
      className='MuxInputGuidance-wrapper'
      data-testid='MuxInputGuidance-wrapper'
    >
      {renderItems()}
    </Wrapper>
  );
}

export default MuxInputGuidance;
