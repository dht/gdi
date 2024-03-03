import { Icon, useMount } from '@gdi/ui';
import { useCallback, useRef, useState } from 'react';
import { useKey } from 'react-use';
import { Clear, Input, Send, Wrapper } from './MuxInput.style';

export type MuxInputProps = {
  callbacks: {
    onSubmit: (prompt: string) => void;
    onClear: () => void;
  };
};

export function MuxInput(props: MuxInputProps) {
  const { callbacks } = props;
  const [input, setInput] = useState('');
  const refInput = useRef<any>(null);

  const ctaEnabled = input.length > 0;

  function onChange(e: any) {
    setInput(e.target.value);
  }

  const onSubmit = useCallback(() => {
    callbacks.onSubmit(input);
    setInput('');
  }, [input]);

  const onEnter = useCallback(
    (ev: any) => {
      if (ev.metaKey) return;
      ev.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );

  useKey('Enter', onEnter, {}, [onEnter]);

  useMount(() => {
    refInput.current?.focus();
  });

  return (
    <Wrapper className='MuxInput-wrapper' data-testid='MuxInput-wrapper'>
      <Clear onClick={callbacks.onClear}>Clear</Clear>
      <Input
        ref={refInput}
        placeholder='Message ChatGPT...'
        value={input}
        onChange={onChange}
      />
      <Send disabled={!ctaEnabled} onClick={onSubmit}>
        <Icon name='arrow_upward' />
      </Send>
    </Wrapper>
  );
}

export default MuxInput;
