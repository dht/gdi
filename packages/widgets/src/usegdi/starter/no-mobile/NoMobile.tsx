import React from 'react';
import { P, Wrapper } from './NoMobile.style';
import { Button, toast } from '@gdi/ui';

export type NoMobileProps = {};

export function NoMobile(_props: NoMobileProps) {
  async function handleShare() {
    if (!navigator.share) {
      return;
    }

    try {
      await navigator.share({
        title: 'Check this AI-Board by GDI',
        url: document.location.href,
      });
      toast.show('Share successful');
    } catch (error: any) {
      toast.show('Share failed: ' + error.message, 'error');
    }
  }

  return (
    <Wrapper className='NoMobile-wrapper' data-testid='NoMobile-wrapper'>
      <P>Mobile is not supported for this board</P>
      <Button color='primary' onClick={handleShare}>
        Share for later
      </Button>
    </Wrapper>
  );
}

export default NoMobile;
