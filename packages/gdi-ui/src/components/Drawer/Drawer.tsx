import classnames from 'classnames';
import React from 'react';
import { useKey } from 'react-use';
import { Icon } from '../Icon/Icon';
import { Actions, Content, Header, Title, Wrapper } from './Drawer.style';

export type DrawerProps = {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export function Drawer(props: DrawerProps) {
  const { title, open } = props;

  function onClose() {
    if (!open) {
      return;
    }

    props.onClose();
  }

  useKey('Escape', () => { onClose()}, {}, [open]); // prettier-ignore

  const className = classnames('Drawer-wrapper', {
    open,
  });

  return (
    <Wrapper className={className} data-testid='Drawer-wrapper'>
      <Header>
        <Title>{title}</Title>
        <Actions>
          <Icon onClick={onClose} name='close' />
        </Actions>
      </Header>
      <Content>{props.children}</Content>
    </Wrapper>
  );
}

export default Drawer;
