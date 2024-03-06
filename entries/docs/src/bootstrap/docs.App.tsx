import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Top from '../components/Top/Top';
import { DocsPageContainer } from '../pages/DocsPage/DocsPage.container';

export const App = () => {
  return (
    <Wrapper>
      <Top />
      <DocsPageContainer />
      <Footer />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
