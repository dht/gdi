import React from 'react';
import { Content, Wrapper, Dot } from './MuxMessageDynamic.style';
import MuxMessageAuthor from '../MuxMessageAuthor/MuxMessageAuthor';

export type MuxMessageDynamicProps = {
  content?: string;
};

export function MuxMessageDynamic(props: MuxMessageDynamicProps) {
  const { content = '' } = props;

  const lines = content.split(/\n/g);

  function renderLine(line: string, index: number) {
    const isLast = index === lines.length - 1;

    return (
      <React.Fragment key={index}>
        {line}
        {!isLast && <br />}
      </React.Fragment>
    );
  }

  function renderLines() {
    return lines.map((line: string, index) => renderLine(line, index));
  }

  return (
    <Wrapper
      className='MuxMessageDynamic-wrapper'
      data-testid='MuxMessageDynamic-wrapper'
    >
      <MuxMessageAuthor role='assistant' />
      <Content>
        {renderLines()}
        <Dot />
      </Content>
    </Wrapper>
  );
}

export default MuxMessageDynamic;
