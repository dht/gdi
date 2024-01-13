import React from 'react';
import {
  Actions,
  Cancel,
  Content,
  Cta,
  Input,
  P,
  Wrapper,
} from './SwitchAdapter.style';
import { Note } from '@gdi/ui';

export type SwitchAdapterProps = {
  isLocalInstance: boolean;
  localInstanceUrl: string;
  onCta: (value: boolean) => void;
  onCancel: () => void;
};

export function SwitchAdapter(props: SwitchAdapterProps) {
  const { isLocalInstance, localInstanceUrl } = props;

  const name = isLocalInstance ? 'remote' : 'local';

  function onCta() {
    props.onCta(!isLocalInstance);
  }

  function renderUrl() {
    if (!isLocalInstance) return null;

    return <Input disabled value={localInstanceUrl} />;
  }

  return (
    <Wrapper
      className='SwitchAdapter-wrapper'
      data-testid='SwitchAdapter-wrapper'
    >
      <Content>
        {renderUrl()}
        <Cta onClick={onCta}>Switch to {name} instance</Cta>
      </Content>
      <Note>
        You can read more about switching to {name} instance in the{' '}
        <a href='/docs'>docs</a>
      </Note>
      <Actions>
        <Cancel onClick={props.onCancel} className='link'>
          Cancel
        </Cancel>
      </Actions>
    </Wrapper>
  );
}

export default SwitchAdapter;
