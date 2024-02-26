import { Route, Routes } from 'react-router-dom';
import MuxContainer from '../../components/Mux/Mux.container';
import MuxOverlayContainer from '../../components/MuxOverlay/MuxOverlay.container';
import { Wrapper } from './RootPage.style';
import { pages } from '../';

export type RootPageProps = {};

export function RootPage(_props: RootPageProps) {
  return (
    <Wrapper className='RootPage-wrapper' data-testid='RootPage-wrapper'>
      <Routes>
        <Route path='/' element={<pages.mux />} />
        <Route path='/account' element={<pages.account />} />
        <Route path='/assets' element={<pages.assets />} />
        <Route path='/browse' element={<pages.browse />} />
        <Route path='/capabilities' element={<pages.capabilities />} />
        <Route path='/docs' element={<pages.docs />} />
        <Route path='/flows' element={<pages.flows />} />
        <Route path='/history' element={<pages.history />} />
        <Route path='/home' element={<pages.home />} />
        <Route path='/logs' element={<pages.logs />} />
        <Route path='/map' element={<pages.map />} />
        <Route path='/new-board' element={<pages.newBoard />} />
        <Route path='/new-review' element={<pages.newReview />} />
        <Route path='/privacy-policy' element={<pages.privacyPolicy />} />
        <Route path='/report-issue' element={<pages.reportIssue />} />
        <Route path='/settings' element={<pages.settings />} />
        <Route path='/terms-of-use' element={<pages.termsOfUse />} />
      </Routes>
      <MuxOverlayContainer />
    </Wrapper>
  );
}

export default RootPage;
