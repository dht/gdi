import React from 'react';
import { P, Title, Wrapper } from './SectionTwoLines.style';
import { Json } from 'redux-store-generator';

export type SectionTwoLinesProps = {
  data: Json;
};

export function SectionTwoLines(props: SectionTwoLinesProps) {
  const { data } = props;
  const { id, title, description } = data;

  return (
    <Wrapper className='SectionTwoLines-wrapper' data-testid='SectionTwoLines-wrapper'>
      <Title value={title} />
      <P>{description}</P>
    </Wrapper>
  );
}

export default SectionTwoLines;
