import { useContext } from 'react';
import { GridContext } from '../../Grid/Grid.context';
import MobileArrows from '../MobileArrows/MobileArrows';
import MobileMiniMap from '../MobileMiniMap/MobileMiniMap';
import { Flex, Logo, Wrapper } from './MobileHeader.style';
import { invokeEvent } from 'shared-base';

export type MobileHeaderProps = {};

export function MobileHeader(_props: MobileHeaderProps) {
  const context = useContext(GridContext);
  const { state } = context;

  function onLogo() {
    invokeEvent('nav', { path: '/' });
  }

  return (
    <Wrapper className='MobileHeader-wrapper' data-testid='MobileHeader-wrapper'>
      <Logo src='/logo-white.svg' alt='logo' onClick={onLogo} />
      <Flex />
      <MobileMiniMap columnsCount={2} />
      <MobileArrows />
    </Wrapper>
  );
}

export default MobileHeader;
