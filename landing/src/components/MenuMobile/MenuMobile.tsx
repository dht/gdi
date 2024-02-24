import React, { useRef } from 'react';
import {
  Toggler,
  Menu,
  Wrapper,
  Close,
  Content,
  Overlay,
  Header,
  Scrollable,
} from './MenuMobile.style';
import InnerMenu from './_parts/Menu/Menu';
import { useToggle } from 'react-use';
import classnames from 'classnames';
import { useNoScroll } from './MenuMobile.hooks';
import Logo from '../Logo/Logo';
import { Json } from '../../types';
import Icon from './_parts/Icon/Icon';

export type MenuMobileProps = {
  data?: Json;
  isLoading?: boolean;
  onSelect: (doc: Json) => void;
};

export function MenuMobile(props: MenuMobileProps) {
  const [showMenu, toggle] = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);

  useNoScroll(showMenu);

  function onSelect(doc: Json) {
    toggle();
    props.onSelect(doc);
  }

  function onOverlay(ev: any) {
    // only direct clicks on the overlay should close the menu
    if (ev.target !== ref.current) return;

    toggle();
  }

  function renderInner() {
    const className = classnames({
      show: showMenu,
    });

    return (
      <Menu className={className}>
        <Overlay ref={ref} onClick={onOverlay}>
          <Content className={className}>
            <Header>
              <Logo size={24} onClick={toggle} />
            </Header>
            <Scrollable>
              <InnerMenu {...props} onSelect={onSelect} />
            </Scrollable>
            <Close onClick={toggle}>
              <Icon name='close' />
            </Close>
          </Content>
        </Overlay>
      </Menu>
    );
  }

  return (
    <Wrapper className='MenuMobile-wrapper' data-testid='MenuMobile-wrapper'>
      <Toggler onClick={toggle}>
        <Icon name='menu' />
      </Toggler>
      {renderInner()}
    </Wrapper>
  );
}

export default MenuMobile;
