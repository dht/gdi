import React from 'react';
import { Content, Wrapper } from './MuxMessage.style';
import { IMessage } from '@gdi/store-base';
import MuxMessageAuthor from '../MuxMessageAuthor/MuxMessageAuthor';

export type MuxMessageProps = {
  message: IMessage;
};

export function MuxMessage(props: MuxMessageProps) {
  const { message } = props;
  const { content = '', role } = message;

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
    <Wrapper className='MuxMessage-wrapper' data-testid='MuxMessage-wrapper'>
      <MuxMessageAuthor role={role as any} />
      <Content>{renderLines()}</Content>
    </Wrapper>
  );
}

export default MuxMessage;
