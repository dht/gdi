import { IMessage } from '@gdi/store-base';
import { useCustomEvent, useMeasureOnce } from '@gdi/ui';
import { useRef, useState } from 'react';
import { Bottom, Column, Inner, Wrapper } from './Mux.style';
import MuxEmpty from './_parts/MuxEmpty/MuxEmpty';
import MuxInput from './_parts/MuxInput/MuxInput';
import MuxMessages from './_parts/MuxMessages/MuxMessages';

export type MuxProps = {
  messages: IMessage[];
  callbacks: {
    onSubmit: (prompt: string) => void;
  };
  children: React.ReactNode;
};

export function Mux(props: MuxProps) {
  const { messages, callbacks } = props;
  const [message, setMessage] = useState('');
  const refInner = useRef<HTMLDivElement>(null);
  const [refContent, { height }] = useMeasureOnce();

  useCustomEvent('mux/content', (data: Json) => {
    const { content } = data;

    setMessage(content);

    if (!refInner.current) return;
    // scroll to bottom
    refInner.current.scrollTop = refInner.current.scrollHeight;
  });

  function renderInner() {
    if (messages.length === 0) {
      return <MuxEmpty />;
    }

    return <MuxMessages messages={messages} message={message} />;
  }

  const style = {
    maxHeight: height - 120 + 'px',
  };

  return (
    <Wrapper className='Mux-wrapper' data-testid='Mux-wrapper'>
      <Column ref={refContent}>
        <Inner ref={refInner} style={style}>
          {renderInner()}
        </Inner>
        <Bottom>
          <MuxInput callbacks={callbacks} />
        </Bottom>
      </Column>
      <Column>{props.children}</Column>
    </Wrapper>
  );
}

export default Mux;
