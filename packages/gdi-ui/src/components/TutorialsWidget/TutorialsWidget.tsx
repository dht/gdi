import React, { useEffect, useRef } from 'react';
import { useToggle } from 'react-use';
import {
  Content,
  Description,
  Details,
  Handle,
  Image,
  Title,
  Tutorial,
  Wrapper,
} from './TutorialsWidget.style';

export type TutorialsWidgetProps = {
  boardId: string;
  tutorialPack: any;
  onAction: (action: any) => void;
};

export function TutorialsWidget(props: TutorialsWidgetProps) {
  const { boardId, tutorialPack } = props;
  const { tutorials } = tutorialPack;
  const [on, toggle] = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);

  const height = tutorials.length * 80;

  useEffect(() => {
    if (!on) return;

    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        toggle(false);
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [on]);

  function onOpen(tutorialId: string) {
    props.onAction({
      type: 'HOME',
      verb: 'showTutorial',
      id: boardId,
      params: {
        tutorialId,
      },
    });
  }

  function renderTutorial(tutorial: Json) {
    const { id, title, description, youtubeId } = tutorial;

    const imageUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

    const style = {
      backgroundImage: `url(${imageUrl})`,
    };

    return (
      <Tutorial key={tutorial.id} className='tutorial' onClick={() => onOpen(id)}>
        <Image style={style} />
        <Details>
          <Title className='title'>{title}</Title>
          <Description>{description}</Description>
        </Details>
      </Tutorial>
    );
  }

  function renderTutorials() {
    return tutorials.map((tutorial: Json) => renderTutorial(tutorial));
  }

  const style: React.CSSProperties = {
    position: 'absolute',
    top: on ? 0 : -height - 2,
  };

  const styleContent: React.CSSProperties = {
    height,
  };

  return (
    <Wrapper
      className='TutorialsWidget-wrapper'
      style={style}
      data-testid='TutorialsWidget-wrapper'
      ref={ref}
    >
      <Content style={styleContent}>{renderTutorials()}</Content>
      <Handle onClick={toggle}>Tutorials</Handle>
    </Wrapper>
  );
}

export default TutorialsWidget;
