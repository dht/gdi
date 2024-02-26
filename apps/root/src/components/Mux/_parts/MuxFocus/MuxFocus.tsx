import React from 'react';
import { Field, Value, Wrapper } from './MuxFocus.style';
import { Label } from 'recharts';
import { data } from './MuxFocus.data';
import { Icon } from '@gdi/ui';

export type MuxFocusProps = {};

export function MuxFocus(_props: MuxFocusProps) {
  function renderItem(item: Json) {
    const { title, value } = item;

    return (
      <Field key={item.id}>
        {/* <Icon name='map' /> */}
        {/* <Label>{title}</Label> */}
        <Value>{String(value).substring(0, 1)}</Value>
      </Field>
    );
  }

  function renderItems() {
    return data.map((item: Json) => renderItem(item));
  }

  return (
    <Wrapper className='MuxFocus-wrapper' data-testid='MuxFocus-wrapper'>
      {renderItems()}
    </Wrapper>
  );
}

export default MuxFocus;
