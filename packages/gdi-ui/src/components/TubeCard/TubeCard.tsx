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
} from './TubeCard.style';
import { format } from '../../utils';

export type TubeCardProps = {
  card: Json;
  onClick: (id: string) => void;
};

export function TubeCard(props: TubeCardProps) {
  const { card } = props;
  const { id, imageUrl, iconUrl, title, author, version, duration, creationDate } = card;

  function onClick() {
    props.onClick(id);
  }

  const style: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
  };

  const styleAvatar: React.CSSProperties = {
    backgroundImage: `url(${iconUrl})`,
  };

  const timeAgo = format.date.timeAgo(creationDate);
  const durationFormatted = format.number.duration(duration);

  return (
    <Wrapper className='TubeCard-wrapper' data-testid='TubeCard-wrapper' onClick={onClick}>
      <Image style={style}>
        <Duration>{durationFormatted}</Duration>
      </Image>
      <Details>
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
