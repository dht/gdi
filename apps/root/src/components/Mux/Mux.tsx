import { IMessage } from '@gdi/store-base';
import { Content, Wrapper } from './Mux.style';
import MuxInput from './_parts/MuxInput/MuxInput';
import MuxMessages from './_parts/MuxMessages/MuxMessages';
import { useRef, useState } from 'react';
import { useCustomEvent } from '@gdi/ui';

export type MuxProps = {
  messages: IMessage[];
  callbacks: {
    onSubmit: (prompt: string) => void;
  };
};

export function Mux(props: MuxProps) {
  const { messages, callbacks } = props;
  const [message, setMessage] = useState('');
  const refContent = useRef<HTMLDivElement>(null);

  useCustomEvent('mux/content', (data: Json) => {
    const { content } = data;
    setMessage(content);

    if (!refContent.current) return;
    // scroll to bottom
    refContent.current.scrollTop = refContent.current.scrollHeight;
  });

  return (
    <Wrapper className='Mux-wrapper' data-testid='Mux-wrapper'>
      <Content ref={refContent}>
        <MuxMessages messages={messages} message={message} />
      </Content>
      <MuxInput callbacks={callbacks} />
    </Wrapper>
  );
}

export default Mux;
