import { Icon } from '@gdi/ui';
import { Top, Wrapper } from './SideBar.style';
import Logo from './_parts/Logo/Logo';
import { CommandPalette } from './_parts/CommandPalette/CommandPalette';
import { Menu } from './_parts/Menu/Menu';
import classnames from 'classnames';
import { invokeEvent } from 'shared-base';

export type SideBarProps = {
  minimal: boolean;
};

export function SideBar(props: SideBarProps) {
  const { minimal } = props;

  function onLogoClick() {
    invokeEvent('nav', { path: '/' });
  }

  const className = classnames('SideBar-wrapper', {
    minimal,
  });

  return (
    <Wrapper className={className} data-testid='SideBar-wrapper'>
      <Top>
        <Logo minimal={minimal} onClick={onLogoClick} />
        {/* <Icon color='#999' name='map' /> */}
      </Top>
      {!minimal && <CommandPalette />}
      <Menu minimal={minimal} />
    </Wrapper>
  );
}

export default SideBar;
