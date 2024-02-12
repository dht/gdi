import { useContext } from 'react';
import { GridContext } from '../../Grid/Grid.context';
import MobileArrows from '../MobileArrows/MobileArrows';
import MobileMiniMap from '../MobileMiniMap/MobileMiniMap';
import { Flex, Wrapper } from './MobileHeader.style';
import { invokeEvent } from 'shared-base';
import { Logo } from './MobileHeader.components';

export type MobileHeaderProps = {};

export function MobileHeader(props: MobileHeaderProps) {
  function onLogo() {
    invokeEvent('nav', { path: '/' });
  }

  return (
    <Wrapper className='MobileHeader-wrapper' data-testid='MobileHeader-wrapper'>
      <Logo onClick={onLogo} />
      <Flex />
      <MobileMiniMap columnsCount={2} />
      <MobileArrows />
    </Wrapper>
  );
}

export default MobileHeader;
