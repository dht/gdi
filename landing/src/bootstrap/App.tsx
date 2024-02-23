import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import Top from '../components/Top/Top';
import { sections } from '../config/configs.sections';
import { Json } from '../types';

export const App = () => {
  function renderSection(section: Json) {
    return <Section key={section.id} section={section} />;
  }

  function renderSections() {
    return sections.map((section: Json) => renderSection(section));
  }

  return (
    <Wrapper>
      <Top />
      <Hero />
      {renderSections()}
      <Footer />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
