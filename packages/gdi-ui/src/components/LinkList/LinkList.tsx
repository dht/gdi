import { useState } from 'react';
import { Tabs } from '../Tabs/Tabs';
import { Content, Description, Empty, Id, Link, Title, Wrapper } from './LinkList.style';
import { upperFirst } from 'lodash';

export type LinkListProps = {
  tabs: string[];
  links: Json[];
  onCta: (link: Json) => void;
};

export function LinkList(props: LinkListProps) {
  const { tabs, links } = props;

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filteredLinks = links.filter((link: Json) => link.tabId === activeTab);

  function renderLink(link: Json) {
    return (
      <Link key={link.id} className='link' onClick={() => props.onCta(link)}>
        <Id>{link.id}</Id>
        <Title>{link.name}</Title>
        <Description>{upperFirst(link.description)}</Description>
      </Link>
    );
  }

  function renderLinks() {
    if (filteredLinks.length === 0) {
      return <Empty>Empty list</Empty>;
    }

    return filteredLinks.map((link: Json) => renderLink(link));
  }
  return (
    <Wrapper className='LinkList-wrapper' data-testid='LinkList-wrapper'>
      <Content>{renderLinks()}</Content>
      <Tabs bottom tabs={tabs} activeTab={activeTab} onChange={(tab) => setActiveTab(tab)} />
    </Wrapper>
  );
}

export default LinkList;
