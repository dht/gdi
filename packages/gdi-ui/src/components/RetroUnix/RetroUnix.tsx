import React, { useEffect } from 'react';
import { Content, Cursor, P, ScreenDoor, Wrapper } from './RetroUnix.style';
import { useTyping } from './RetroUnix.hooks';

export type RetroUnixProps = {
  children: string;
};

export function RetroUnix(props: RetroUnixProps) {
  const { children } = props;
  const value = useTyping(children);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // scroll to bottom, animated
    const node = ref.current;
    if (!node) {
      return;
    }

    node.scrollTo({
      top: node.scrollHeight,
      behavior: 'smooth',
    });
  }, [value]);

  return (
    <Wrapper className='RetroUnix-wrapper' data-testid='RetroUnix-wrapper'>
      <ScreenDoor />
      <Content ref={ref}>
        <P>
          {value.split('_').map((line, i) => (
            <span key={i}>
              <br />
              {line}
            </span>
          ))}
          <Cursor />
        </P>
      </Content>
    </Wrapper>
  );
}

export default RetroUnix;
