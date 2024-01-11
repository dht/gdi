import React from 'react';
import { Wrapper } from './CopyClip.style';
import { Icon } from '@gdi/ui';

export type CopyClipProps = {
  onCopy: () => void;
};

export function CopyClip(props: CopyClipProps) {
  return (
    <Wrapper className='CopyClip-wrapper' data-testid='CopyClip-wrapper'>
      <Icon name='content_copy' onClick={() => props.onCopy()} />
    </Wrapper>
  );
}

export default CopyClip;
