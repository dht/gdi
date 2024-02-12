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
import Markdown from '../Markdown/Markdown';
import { Toast } from '../Toast/Toast';
import { toast } from '../Toast/Toast.actions';

export type TubeVideoProps = {
  card: Json;
  children: React.ReactNode;
};

export function TubeVideo(props: TubeVideoProps) {
  const { card } = props;
  const { iconUrl, title, author, url, creationDate, description = '' } = card;

  const timeAgo = format.date.timeAgo(creationDate);

  const styleAvatar: React.CSSProperties = {
    backgroundImage: `url(${iconUrl})`,
  };

  const descriptionParsed = description.replace(/\$url/, url);

  function onShare() {
    toast.show('Link copied to clipboard');
    const url = document.location.href;
    navigator.clipboard.writeText(url);
  }

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
            <Cta iconName='share' onClick={onShare}>
              Share
            </Cta>
          </Actions>
        </Row>
      </Details>
      <Description>
        <Markdown markdown={descriptionParsed} />
      </Description>
    </Wrapper>
  );
}

export default TubeVideo;
