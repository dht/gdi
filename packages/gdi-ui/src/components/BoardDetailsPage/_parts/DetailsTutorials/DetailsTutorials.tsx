import React from 'react';
import { Content, H2, Image, Subtitle, Title, Tutorial, Wrapper } from './DetailsTutorials.style';
import { format } from '../../../../utils';

export type DetailsTutorialsProps = {
  board: any;
  onAction: (action: any) => void;
};

export function DetailsTutorials(props: DetailsTutorialsProps) {
  const { board } = props;
  const { id, tutorialPack } = board;

  if (!tutorialPack) return null;

  const { tutorials } = tutorialPack;

  function onOpen(tutorialId: string) {
    props.onAction({
      type: 'HOME',
      verb: 'showTutorial',
      id,
      params: {
        tutorialId,
      },
    });
  }

  function renderTutorial(tutorial: Json) {
    const { id, title, author, date, youtubeId } = tutorial;

    const imageUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

    const style = {
      backgroundImage: `url(${imageUrl})`,
    };

    return (
      <Tutorial key={tutorial.id} className='tutorial' onClick={() => onOpen(id)}>
        <Image style={style} />
        <Title className='title'>{title}</Title>
        <Subtitle>
          {format.date.short(date)} | {author}
        </Subtitle>
      </Tutorial>
    );
  }

  function renderTutorials() {
    return tutorials.map((tutorial: Json) => renderTutorial(tutorial));
  }

  return (
    <Wrapper className='DetailsTutorials-wrapper' data-testid='DetailsTutorials-wrapper'>
      <H2>Tutorials</H2>
      <Content>{renderTutorials()}</Content>
    </Wrapper>
  );
}

export default DetailsTutorials;
