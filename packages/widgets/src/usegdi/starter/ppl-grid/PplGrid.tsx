import { UnderConstruction } from '@gdi/ui';
import classnames from 'classnames';
import React from 'react';
import { Header, Image, Item, Items, Name, Wrapper } from './PplGrid.style';

export const BASE_URL = 'https://raw.githubusercontent.com/dht/gdi-ppl/main/';

export type PplGridProps = {
  data: Json[];
  personId: string;
  onChange: (personId: string) => void;
};

export function PplGrid(props: PplGridProps) {
  const { data, personId } = props;

  function renderItem(item: Json) {
    const { firstName, lastName, thumbUrl, imageUrl } = item;

    const style: React.CSSProperties = {
      backgroundImage: `url(${BASE_URL}/ppl-images/${thumbUrl})`,
    };

    const className = classnames('item', {
      selected: personId === item.id,
    });

    return (
      <Item key={item.id} className={className} onClick={() => props.onChange(item.id)}>
        <Image className='image' style={style}></Image>
        <Name className='name'>
          {firstName} {lastName}
        </Name>
      </Item>
    );
  }

  function renderItems() {
    return data.filter((item) => item.imageExists).map((item: Json) => renderItem(item));
  }

  return (
    <Wrapper className='PplGrid-wrapper' data-testid='PplGrid-wrapper'>
      <Header>Talk with or ask about a notable individual:</Header>
      <Items>{renderItems()}</Items>
      <UnderConstruction small />
    </Wrapper>
  );
}

export default PplGrid;
