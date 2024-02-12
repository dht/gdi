import React from 'react';
import { format } from '../../utils';
import { isMobile } from '../../utils/mobile';
import Markdown from '../Markdown/Markdown';
import { toast } from '../Toast/Toast.actions';
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
import TubeTop from '../TubeTop/TubeTop';

export type TubeVideoProps = {
  card: Json;
  children: React.ReactNode;
  minimal?: boolean;
  callbacks: {
    onClick: (id: string) => void;
    onLogoClick: () => void;
  };
};

export function TubeVideo(props: TubeVideoProps) {
  const { card, minimal, callbacks } = props;
  const { iconUrl, title, author, url, creationDate, description = '' } = card;

  const timeAgo = format.date.timeAgo(creationDate);

  const styleAvatar: React.CSSProperties = {
    backgroundImage: `url(${iconUrl})`,
  };

  const descriptionParsed = description.replace(/\$url/, url);
  const descriptionColorMode = isMobile() ? 'dark' : 'light';

  function onShare() {
    toast.show('Link copied to clipboard');
    const url = document.location.href;
    navigator.clipboard.writeText(url);
  }

  return (
    <Wrapper className='TubeVideo-wrapper' data-testid='TubeVideo-wrapper'>
      <TubeTop hideTip ctaText='All Videos' minimal={minimal} callbacks={callbacks} />
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
        <Markdown mode={descriptionColorMode} markdown={descriptionParsed} />
      </Description>
    </Wrapper>
  );
}

export default TubeVideo;
