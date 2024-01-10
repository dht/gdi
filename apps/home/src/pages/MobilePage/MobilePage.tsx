import { NoMobile, Lottie } from '@gdi/ui';
import BasePage from '../BasePage';

export type MobilePageProps = {};

export function MobilePage(_props: MobilePageProps) {
  return (
    <BasePage>
      <Lottie
        url='https://lottie.host/2b4c1760-d0aa-404d-be8c-ac867e19a69d/XgDaBtDczV.json'
        loop
        size={230}
      />
      <NoMobile />
    </BasePage>
  );
}

export default MobilePage;
