import React from 'react';
import { Details, Subtitle, Title, Wrapper } from './MultiCtas.style';
import { Json } from '../../types';
import { items } from './MultiCtas.data';
import { IconGrid } from '@gdi/ui';
import { MultiCtasEmpty } from './MultiCtas.components';

export type MultiCtasProps = {
  item: Json;
  display: Json;
  onIconClick: (icon: Json) => void;
};

export function MultiCtas(props: MultiCtasProps) {
  const { item, display } = props;
  const { title, subtitle } = display;

  if (!item) {
    return <MultiCtasEmpty />;
  }

  return (
    <Wrapper className='MultiCtas-wrapper' data-testid='MultiCtas-wrapper'>
      <Details>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Details>
      <IconGrid icons={items} onClick={props.onIconClick} />
    </Wrapper>
  );
}

export default MultiCtas;
