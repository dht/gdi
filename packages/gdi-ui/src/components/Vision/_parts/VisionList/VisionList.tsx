import React, { useState } from 'react';
import {
  Content,
  Group,
  GroupContent,
  GroupTitle,
  Item,
  ItemFolder,
  ItemPreview,
  ItemSubtitle,
  ItemTime,
  ItemTitle,
  Wrapper,
} from './VisionList.style';
import VisionInput from '../VisionInput/VisionInput';
import Icon from '../../../Icon/Icon';
import classnames from 'classnames';

export type VisionListProps = {
  groups: string[];
  items: Json[];
  selectedId: string;
  onChange: (id: string) => void;
};

export function VisionList(props: VisionListProps) {
  const { groups, items, selectedId } = props;

  function renderItem(item: Json) {
    const { title, content, folder } = item;

    const className = classnames('item', {
      selected: item.id === selectedId,
    });

    return (
      <Item key={item.id} className={className} onClick={() => props.onChange(item.id)}>
        <ItemTitle>{title}</ItemTitle>
        <ItemSubtitle>
          <ItemTime></ItemTime>
          <ItemPreview>{content}</ItemPreview>
        </ItemSubtitle>
        <ItemFolder>
          <Icon name='folder' size={17} />
          &nbsp;
          {folder}
        </ItemFolder>
      </Item>
    );
  }

  function renderItems(group: string) {
    return items
      .filter((item: Json) => item.listGroupId === group)
      .map((item: Json) => renderItem(item));
  }

  function renderGroup(group: string) {
    return (
      <Group key={group} className='group'>
        <GroupTitle>{group}</GroupTitle>
        <GroupContent>{renderItems(group)}</GroupContent>
      </Group>
    );
  }

  function renderGroups() {
    return groups.map((group: string) => renderGroup(group));
  }

  return (
    <Wrapper className='VisionList-wrapper' data-testid='VisionList-wrapper'>
      <VisionInput type='search' />
      <Content>{renderGroups()}</Content>
    </Wrapper>
  );
}

export default VisionList;
