import React, { useContext } from 'react';
import { Current, Id, Item, Items, Wrapper } from './PostWriterViews.style';
import { items } from './PostWriterViews.data';
import { Icon } from '@gdi/ui';
import { WritePostContext } from '../../PostWriter.context';
import classnames from 'classnames';

export type PostWriterViewsProps = {};

export function PostWriterViews(_props: PostWriterViewsProps) {
  const { state, patchState } = useContext(WritePostContext);
  const { focusIndex, instructionsId1, instructionsId2, instructionsId3 } = state;

  function onClick(item: Json) {
    const change: Json = {};

    if (!focusIndex) {
      return;
    }

    change[`instructionsId${focusIndex}`] = item.id;
    change[`instructions${focusIndex}`] = item.instructions;

    patchState(change);
  }

  function renderItem(item: Json) {
    const { id, iconName } = item;

    const is1 = instructionsId1 === id;
    const is2 = instructionsId2 === id;
    const is3 = instructionsId3 === id;

    const className = classnames('item', {
      selected: is1 || is2 || is3,
    });

    const text = is1 ? 'B1' : is2 ? 'B2' : is3 ? 'B3' : '';

    return (
      <Item key={item.id} className={className} onClick={() => onClick(item)}>
        {text && <Current>{text}</Current>}
        <Icon name={iconName} />
        <Id>{id}</Id>
      </Item>
    );
  }

  function renderItems() {
    return items.map((item: Json) => renderItem(item));
  }

  return (
    <Wrapper className='PostWriterViews-wrapper' data-testid='PostWriterViews-wrapper'>
      <Items>{renderItems()}</Items>
    </Wrapper>
  );
}

export default PostWriterViews;
