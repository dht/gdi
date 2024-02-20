import React from 'react';
import { Wrapper } from './MuxMessages.style';
import { IMessage } from '@gdi/store-base';
import MuxMessage from '../MuxMessage/MuxMessage';
import MuxMessageDynamic from '../MuxMessageDynamic/MuxMessageDynamic';

export type MuxMessagesProps = {
  messages: IMessage[];
  message: string;
};

export function MuxMessages(props: MuxMessagesProps) {
  const { messages = [], message = '' } = props;

  function renderMessage(message: IMessage) {
    return <MuxMessage key={message.id} message={message} />;
  }

  function renderMessages() {
    return messages.map((message: IMessage) => renderMessage(message));
  }

  function renderStreamingMessage() {
    if (!message) {
      return null;
    }

    return <MuxMessageDynamic content={message} />;
  }

  return (
    <Wrapper className='MuxMessages-wrapper' data-testid='MuxMessages-wrapper'>
      {renderMessages()}
      {renderStreamingMessage()}
    </Wrapper>
  );
}

export default MuxMessages;
