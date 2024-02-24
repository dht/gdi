import React from 'react';
import {
  Column,
  Cta,
  Description,
  Icon,
  Media,
  Title,
  Video,
  Wrapper,
} from './SectionScreenshot.style';
import { Json } from 'redux-store-generator';
import classnames from 'classnames';

export type SectionScreenshotProps = {
  data: Json;
};

export function SectionScreenshot(props: SectionScreenshotProps) {
  const { data } = props;
  const {
    color,
    icon,
    title,
    description,
    cta,
    ctaUrl,
    videoUrl,
    videoHeight = 463,
    videoLoop = true,
    controls = false,
  } = data;

  const className = classnames('SectionScreenshot-wrapper', color, {});

  function onClick() {
    window.open(ctaUrl, '_blank');
  }

  const style = {
    height: videoHeight + 'px',
  };

  return (
    <Wrapper className={className} data-testid='SectionScreenshot-wrapper'>
      <Column className='column'>
        <Icon>
          <i className='material-symbols-outlined'>{icon}</i>
        </Icon>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Cta onClick={onClick}>{cta}</Cta>
      </Column>
      <Column className='column'>
        <Media className='media' style={style}>
          <Video autoPlay loop={videoLoop} muted playsInline controls={controls}>
            <source src={videoUrl} type='video/webm' />
          </Video>
        </Media>
      </Column>
    </Wrapper>
  );
}

export default SectionScreenshot;
