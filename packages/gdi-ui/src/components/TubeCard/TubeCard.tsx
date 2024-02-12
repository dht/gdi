import React from 'react';
import {
  Author,
  Details,
  AvatarUrl,
  Column,
  Duration,
  Image,
  Stats,
  TimeAgo,
  Title,
  Views,
  Wrapper,
  Soon,
} from './TubeCard.style';
import { format } from '../../utils';
import classnames from 'classnames';

export type TubeCardProps = {
  card: Json;
  onClick: (id: string) => void;
  width?: number;
  minimal?: boolean;
};

export function TubeCard(props: TubeCardProps) {
  const { card, minimal, width = 354 } = props;
  const { id, imageUrl, iconUrl, title, author, version, duration, creationDate, isActive } = card;

  const height = (210 * width) / 354;

  function onClick() {
    props.onClick(id);
  }

  const style: React.CSSProperties = {};

  if (minimal) {
    style.width = `${width}px`;
    style.height = `${height}px`;
  }

  const styleImage: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    width: `${width}px`,
    height: `${height}px`,
  };

  const styleAvatar: React.CSSProperties = {
    backgroundImage: `url(${iconUrl})`,
  };

  const timeAgo = format.date.timeAgo(creationDate);
  const durationFormatted = format.number.duration(duration);

  const className = classnames('TubeCard-wrapper', {
    minimal,
    soon: !isActive,
  });

  return (
    <Wrapper className={className} style={style} data-testid='TubeCard-wrapper' onClick={onClick}>
      <Image className='image' style={styleImage}>
        {minimal && <Author className='author'>by {author}</Author>}
        <Duration className='duration'>{durationFormatted}</Duration>
      </Image>
      <Soon className='soon'>Soon</Soon>
      <Details className='details'>
        <Column>
          <AvatarUrl style={styleAvatar} />
        </Column>
        <Column>
          <Title className='title'>{title}</Title>
          <Author>{author}</Author>
          <Stats>
            <Views>Version {version}</Views>
            <TimeAgo>{timeAgo}</TimeAgo>
          </Stats>
        </Column>
      </Details>
    </Wrapper>
  );
}

export default TubeCard;
