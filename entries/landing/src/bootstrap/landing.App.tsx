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
import { pages } from '../pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  function onSelect(item: Json) {
    const { path } = item;

    window.open(path, '_blank');
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
      <Router>
        <Routes>
          <Route path='/landing/contact-us' element={<pages.contactUs />} />
          <Route path='/landing/*' element={<pages.landing />} />
        </Routes>
      </Router>
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
