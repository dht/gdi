import { Root } from '@gdi/app-root';
import { Form, Prompt, Toast } from '@gdi/ui';
import { useLocation } from 'react-router-dom';
import { BarContainer } from '../containers/Bar.container';
import { CommandPaletteContainer } from '../containers/CommandPalette.container';
import { ContextBarContainer } from '../containers/ContextBar.container';
import { LoggerContainer } from '../containers/Logger.container';
import { SagasContainer } from '../containers/Sagas.container';
import { SideBarContainer } from '../containers/SideBar.container';
import { useNavigationMethod } from '../sagas/saga.navigation';
import { useFullscreen } from './App.hooks';
import { Content, Wrapper } from './App.style';

export const App = () => {
  const location = useLocation();

  useNavigationMethod();
  useFullscreen();

  function renderSurrounding() {
    return (
      <>
        <ContextBarContainer contextBarItems={[]} widgetLibrary={{}} />
        <CommandPaletteContainer />
        <LoggerContainer />
        <Prompt formComponent={Form} />
        <SagasContainer />
        <Toast />
        <BarContainer />
      </>
    );
  }

  return (
    <Wrapper>
      <SideBarContainer />
      <Content>
        <Root />
      </Content>
      {renderSurrounding()}
    </Wrapper>
  );
};
