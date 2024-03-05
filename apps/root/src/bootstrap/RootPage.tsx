import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { pages } from '../pages';
import { groups } from '../groups';

export type RootPageProps = {};

export function RootPage(_props: RootPageProps) {
  return (
    <Wrapper className='RootPage-wrapper' data-testid='RootPage-wrapper'>
      <Routes>
        <Route path='/' element={<groups.mux />} />
        <Route path='/browse/:id' element={<pages.details />} />
        <Route path='/boards/:id' element={<pages.board />} />
        <Route path='/account' element={<groups.account />} />
        <Route path='/capabilities' element={<groups.capabilities />} />
        <Route path='/assets' element={<groups.assets />} />
        <Route path='/docs' element={<pages.docs />} />
        <Route path='/flows' element={<groups.flows />} />
        <Route path='/history' element={<pages.history />} />
        <Route path='/logs' element={<pages.logs />} />
        <Route path='/map' element={<pages.map />} />
        <Route path='/new-board' element={<pages.newBoard />} />
        <Route path='/new-review' element={<pages.newReview />} />
        <Route path='/privacy-policy' element={<pages.privacyPolicy />} />
        <Route path='/report-issue' element={<pages.reportIssue />} />
        <Route path='/terms-of-use' element={<pages.termsOfUse />} />
      </Routes>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #eee;
`;

export default RootPage;
