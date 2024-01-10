import { pages as pagesBoards } from '@gdi/app-boards';
import { pages as pagesHome } from '@gdi/app-home';
import { pages as pagesAuth } from '@gdi/auth';
import { Form, Prompt, Toast } from '@gdi/ui';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { BarContainer } from '../containers/Bar.container';
import { CommandPaletteContainer } from '../containers/CommandPalette.container';
import { ContextBarContainer } from '../containers/ContextBar.container';
import { LoggerContainer } from '../containers/Logger.container';
import { SagasContainer } from '../containers/Sagas.container';
import { all } from '../pages';
import { useNavigationMethod } from '../sagas/saga.navigation';
import styled from 'styled-components';
import { useFullscreen } from './App.hooks';

export const App = () => {
  const location = useLocation();

  useNavigationMethod();
  useFullscreen();

  function renderSurrounding() {
    if (location.pathname === '/monitor') {
      return null;
    }

    return (
      <>
        <ContextBarContainer contextBarItems={[]} widgetLibrary={{}} />
        <CommandPaletteContainer />
        <LoggerContainer />
        <Prompt formComponent={Form} />
        <BarContainer />
        <SagasContainer />
      </>
    );
  }

  return (
    <Wrapper>
      <Routes>
        <Route path='/home' element={<pagesHome.home />} />
        <Route path='/browse' element={<pagesHome.browse />} />
        <Route path='/browse/:id' element={<pagesHome.boardDetails />} />
        <Route path='/boards/:boardId' element={<pagesBoards.gdi />} />
        <Route path='/account' element={<pagesHome.account />} />
        <Route path='/login' element={<pagesAuth.login />} />
        <Route path='/monitor' element={<all.monitor />} />
        <Route path='/docs' element={<pagesHome.docs />} />
        <Route path='/logout' element={<pagesAuth.logout />} />
        <Route path='/boards' element={<Navigate to='/home' />} />
        <Route path='/settings' element={<pagesHome.settings />} />
        <Route path='/newBoard' element={<pagesHome.newBoard />} />
        <Route path='/newReview' element={<pagesHome.newReview />} />
        <Route path='/terms' element={<pagesHome.termsOfUse />} />
        <Route path='/privacy' element={<pagesHome.privacyPolicy />} />
        <Route path='/mobile' element={<pagesHome.mobile />} />
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
      <Toast />
      {renderSurrounding()}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
