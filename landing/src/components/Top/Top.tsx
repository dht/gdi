import React from 'react';
import { Actions, Cta, Menu, MenuItem, Wrapper } from './Top.style';
import { Json } from 'redux-store-generator';
import Logo from '../Logo/Logo';
import { items } from './Top.data';
import GitHubButton from 'react-github-btn';
import classnames from 'classnames';

export type TopProps = {};

export function Top(props: TopProps) {
  function renderMenuItem(item: Json) {
    const { text, isCta, url } = item;

    const Cmp: any = isCta ? Cta : MenuItem;
    const className = classnames(isCta ? 'button' : 'item');

    return (
      <Cmp key={item.id} href={url} className={className}>
        {text}
      </Cmp>
    );
  }

  function renderMenuItems(groupId: string) {
    return items
      .filter((item: Json) => item.groupId === groupId)
      .map((item: Json) => renderMenuItem(item));
  }

  return (
    <Wrapper className='Top-wrapper' data-testid='Top-wrapper'>
      <Logo />
      <Menu>{renderMenuItems('menu')}</Menu>
      <GitHubButton
        href='https://github.com/dht/gdi'
        data-color-scheme='no-preference: dark; light: dark; dark: dark;'
        data-size='large'
        data-show-count='false'
        aria-label='Star dht/gdi on GitHub'
      >
        Star
      </GitHubButton>
      <Actions>{renderMenuItems('action')}</Actions>
    </Wrapper>
  );
}

export default Top;
