import { Icon, useMount } from '@gdi/ui';
import { useCallback, useRef, useState } from 'react';
import { useKey } from 'react-use';
import { Clear, Input, Send, Wrapper } from './MuxInput.style';
import MuxInputGuidanceContainer from '../MuxInputGuidance/MuxInputGuidance.container';

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

  const onKeyDown = useCallback(
    (ev: any) => {
      if (ev.key !== 'Enter') return;
      if (ev.metaKey) return;
      ev.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );

  useMount(() => {
    refInput.current?.focus();
  });

  return (
    <Wrapper className='MuxInput-wrapper' data-testid='MuxInput-wrapper'>
      <MuxInputGuidanceContainer prompt={input} />
      <Clear onClick={callbacks.onClear}>Clear</Clear>
      <Input
        ref={refInput}
        placeholder='Message ChatGPT...'
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Send disabled={!ctaEnabled} onClick={onSubmit}>
        <Icon name='arrow_upward' />
      </Send>
    </Wrapper>
  );
}

export default MuxInput;
