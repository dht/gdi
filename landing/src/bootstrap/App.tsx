import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import Top from '../components/Top/Top';
import { sections } from '../config/configs.sections';
import { Json } from '../types';
import { isMobile } from '../utils/mobile';
import MenuMobile from '../components/MenuMobile/MenuMobile';
import { menuData } from '../data/data.menu';
import { allData } from '../config/configs.data';

export const App = () => {
  function onSelect(item: Json) {
    const { path } = item;

    window.open(path, '_blank');
  }

  function renderSection(section: Json) {
    return <Section key={section.id} section={section} />;
  }

  function renderSections() {
    return sections.map((section: Json) => renderSection(section));
  }

  function renderMobileMenu() {
    if (!isMobile()) {
      return null;
    }

    return <MenuMobile data={menuData} onSelect={onSelect} />;
  }

  return (
    <Wrapper>
      <Top />
      <Hero data={allData.hero} />
      {renderSections()}
      <Footer />
      {renderMobileMenu()}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
