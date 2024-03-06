import React from 'react';
import { Group, GroupTitle, Inner, Item, Items, Wrapper } from './Footer.style';
import { Json } from 'redux-store-generator';
import Container from '../Container/Container';
import { groups, items } from '../../data/data.menu';
import Logo from '../Logo/Logo';
import { isMobile } from '../../utils/mobile';

export type FooterProps = {};

export function Footer(_props: FooterProps) {
  function renderItem(item: Json) {
    const { text, url } = item;

    return (
      <Item key={item.text} target='_blank' className='item' href={url}>
        {text}
      </Item>
    );
  }

  function renderItems(group: string) {
    return items.filter((item) => item.groupId === group).map((item: Json) => renderItem(item));
  }

  function renderGroup(group: string) {
    return (
      <Group key={group} className='group'>
        <GroupTitle>{group}</GroupTitle>
        <Items>{renderItems(group)}</Items>
      </Group>
    );
  }

  function renderGroups() {
    return groups.map((group: string) => renderGroup(group));
  }

  function renderLogo() {
    if (isMobile()) {
      return null;
    }

    return <Logo />;
  }

  return (
    <Wrapper className='Footer-wrapper' data-testid='Footer-wrapper'>
      <Inner>
        {renderLogo()}
        {renderGroups()}
      </Inner>
    </Wrapper>
  );
}

export default Footer;
