import { NoMobile, Lottie } from '@gdi/ui';
import { Wrapper } from './MobilePage.style';

export type MobilePageProps = {};

export function MobilePage(_props: MobilePageProps) {
  return (
    <Wrapper>
      <Lottie
        url='https://lottie.host/2b4c1760-d0aa-404d-be8c-ac867e19a69d/XgDaBtDczV.json'
        loop
        size={230}
      />
      <NoMobile />
    </Wrapper>
  );
}

export default MobilePage;
