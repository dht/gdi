import { toast } from '@gdi/ui';
import { Cta, H3, P, Wrapper } from './NoMobile.style';

export type NoMobileProps = {};

export function NoMobile(_props: NoMobileProps) {
  async function handleShare() {
    if (!navigator.share) {
      return;
    }

    try {
      await navigator.share({
        title: 'Check this AI-Board by GDI',
        url: document.location.origin,
      });
      toast.show('Share successful');
    } catch (error: any) {
      toast.show('Share failed: ' + error.message, 'error');
    }
  }

  return (
    <Wrapper className='NoMobile-wrapper' data-testid='NoMobile-wrapper'>
      <H3>Laptops/Desktops Only</H3>
      <P>
        Most of the features of this board are not available on mobile. Please use a desktop to
        enjoy the full experience.
      </P>
      <P>
        Share it for later, it's worth it... <span>😉</span>
      </P>
      <Cta color='primary' onClick={handleShare}>
        Share for later
      </Cta>
    </Wrapper>
  );
}

export default NoMobile;
