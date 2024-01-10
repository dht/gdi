import React from 'react';
import { Wrapper } from './DownloadBits.style';
import { Icon } from '@gdi/ui';

export type DownloadBitsProps = {
  onDownload: () => void;
};

export function DownloadBits(props: DownloadBitsProps) {
  return (
    <Wrapper className='DownloadBits-wrapper' data-testid='DownloadBits-wrapper'>
      <Icon name='download' onClick={() => props.onDownload()} />
    </Wrapper>
  );
}

export default DownloadBits;
