import React from 'react';
import { Column, Cta, Description, Icon, Media, Title, Wrapper } from './SectionScreenshot.style';
import { Json } from 'redux-store-generator';
import classnames from 'classnames';

export type SectionScreenshotProps = {
  data: Json;
};

export function SectionScreenshot(props: SectionScreenshotProps) {
  const { data } = props;
  const { color, icon, title, description, cta, ctaUrl, videoUrl } = data;

  const className = classnames('SectionScreenshot-wrapper', color, {});

  function onClick() {
    window.open(ctaUrl, '_blank');
  }

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
        <Media className='media'>
          <iframe
            width='100%'
            height={560}
            src={videoUrl}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
            allowFullScreen
          ></iframe>
        </Media>
      </Column>
    </Wrapper>
  );
}

export default SectionScreenshot;
