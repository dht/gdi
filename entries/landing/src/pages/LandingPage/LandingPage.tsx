import Hero from '../../components/Hero/Hero';
import MenuMobile from '../../components/MenuMobile/MenuMobile';
import Section from '../../components/Section/Section';
import { allData } from '../../config/configs.data';
import { sections } from '../../config/configs.sections';
import { menuData } from '../../data/data.menu';
import { Json } from '../../types';
import { isMobile } from '../../utils/mobile';
import { Wrapper } from './LandingPage.style';

export type LandingPageProps = {};

export function LandingPage(_props: LandingPageProps) {
  function renderSection(section: Json) {
    return <Section key={section.id} section={section} />;
  }

  function renderSections() {
    return sections.map((section: Json) => renderSection(section));
  }

  return (
    <Wrapper className='LandingPage-wrapper' data-testid='LandingPage-wrapper'>
      <Hero data={allData.hero} />
      {renderSections()}
    </Wrapper>
  );
}

export default LandingPage;
