import { Icon } from '@gdi/ui';
import { Top, Wrapper } from './SideBar.style';
import Logo from './_parts/Logo/Logo';
import { CommandPalette } from './_parts/CommandPalette/CommandPalette';
import { Menu } from './_parts/Menu/Menu';

export type SideBarProps = {};

export function SideBar(_props: SideBarProps) {
  return (
    <Wrapper className='SideBar-wrapper' data-testid='SideBar-wrapper'>
      <Top>
        <Logo />
        <Icon color='#999' name='map' />
      </Top>
      <CommandPalette />
      <Menu />
    </Wrapper>
  );
}

export default SideBar;
