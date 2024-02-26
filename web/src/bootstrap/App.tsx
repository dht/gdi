import { pages as pagesAuth } from '@gdi/auth';
import { pages as pagesRoot } from '@gdi/app-root';
import { Form, Prompt, Toast } from '@gdi/ui';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
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
        <SagasContainer />
      </>
    );
  }

  return (
    <Wrapper>
      <Routes>
        <Route path='/login' element={<pagesAuth.login />} />
        <Route path='/logout' element={<pagesAuth.logout />} />
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/boards' element={<Navigate to='/home' />} />
        <Route path='/*' element={<pagesRoot.root />} />
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
