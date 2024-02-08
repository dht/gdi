import React from 'react';
import {
  Actions,
  Author,
  AuthorAvatar,
  AuthorName,
  Cta,
  Description,
  Details,
  Player,
  Row,
  TimeAgo,
  Title,
  Wrapper,
} from './TubeVideo.style';
import { format } from '../../utils';

export type TubeVideoProps = {
  card: Json;
  children: React.ReactNode;
};

export function TubeVideo(props: TubeVideoProps) {
  const { card } = props;
  const { iconUrl, title, author, creationDate, description = '' } = card;

  const timeAgo = format.date.timeAgo(creationDate);

  const styleAvatar: React.CSSProperties = {
    backgroundImage: `url(${iconUrl})`,
  };

  return (
    <Wrapper className='TubeVideo-wrapper' data-testid='TubeVideo-wrapper'>
      <Player>{props.children}</Player>
      <Details>
        <Title>{title}</Title>
        <Row>
          <Author>
            <AuthorAvatar style={styleAvatar} />
            <Details>
              <AuthorName>{author}</AuthorName>
              <TimeAgo>{timeAgo}</TimeAgo>
            </Details>
          </Author>
          <Actions>
            <Cta iconName='share'>Share</Cta>
          </Actions>
        </Row>
      </Details>
      <Description>{description}</Description>
    </Wrapper>
  );
}

export default TubeVideo;
