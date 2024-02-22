import React from 'react';
import { Author, Avatar, By, Details, Name, Wrapper } from './MusicItem.style';
import classnames from 'classnames';

export type MusicItemProps = {
  item: Json;
  onClick: (id: string) => void;
};

export function MusicItem(props: MusicItemProps) {
  const { item } = props;
  const { iconUrl, name, author, authorUrl, isSelected } = item;

  const style = {
    backgroundImage: `url(${iconUrl})`,
  };

  const className = classnames('MusicItem-wrapper', {
    selected: isSelected,
  });

  function onClick() {
    props.onClick(item.id);
  }

  return (
    <Wrapper className={className} data-testid='MusicItem-wrapper' onClick={onClick}>
      <Avatar style={style} />
      <Details>
        <Name className='name'>{name}</Name>
        <By>
          by
          <Author href={authorUrl} target='_blank'>
            {author}
          </Author>
        </By>
      </Details>
    </Wrapper>
  );
}

export default MusicItem;
