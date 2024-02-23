import React from 'react';
import { Box, Boxes, Description, Image, Title, Wrapper } from './SectionBoxes.style';
import { Json } from '../../../../types';
import { get } from 'lodash';
import classnames from 'classnames';

export type SectionBoxesProps = {
  data: Json;
};

export function SectionBoxes(props: SectionBoxesProps) {
  const { data } = props;
  const { flavour = 'triple', imageWidth = '80px', items = [] } = data ?? {};

  function renderItem(item: Json) {
    const imageUrl = get(item, 'boardInfo.imageUrl', '');
    const name = get(item, 'boardInfo.name', '');
    const description = get(item, 'boardInfo.description', '');

    const style = {
      backgroundImage: `url(https://raw.githubusercontent.com/dht/gdi-assets/main/${imageUrl})`,
      width: imageWidth,
      height: imageWidth,
    };

    const classNameBox = classnames(flavour);

    return (
      <Box key={item.id} className={classNameBox}>
        <Image style={style} />
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Box>
    );
  }

  function renderItems() {
    return items.map((item: Json) => renderItem(item));
  }

  const className = classnames('boxes', flavour, {});

  return (
    <Wrapper className='SectionBoxes-wrapper' data-testid='SectionBoxes-wrapper'>
      <Boxes className={className}>{renderItems()}</Boxes>
    </Wrapper>
  );
}

export default SectionBoxes;
