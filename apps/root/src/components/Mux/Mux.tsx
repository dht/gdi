import { IMessage } from '@gdi/store-base';
import { Content, Overlay, Wrapper } from './Mux.style';
import MuxInput from './_parts/MuxInput/MuxInput';
import MuxMessages from './_parts/MuxMessages/MuxMessages';
import { useRef, useState } from 'react';
import { useCustomEvent } from '@gdi/ui';
import MuxEmpty from './_parts/MuxEmpty/MuxEmpty';

export type MuxProps = {
  messages: IMessage[];
  callbacks: {
    onSubmit: (prompt: string) => void;
  };
  children?: React.ReactNode;
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

  function renderInner() {
    if (messages.length === 0) {
      return <MuxEmpty />;
    }

    return <MuxMessages messages={messages} message={message} />;
  }

  return (
    <Wrapper className='Mux-wrapper' data-testid='Mux-wrapper'>
      <Content ref={refContent}>{renderInner()}</Content>
      <MuxInput callbacks={callbacks} />
      {props.children}
      <Overlay />
    </Wrapper>
  );
}

export default Mux;
