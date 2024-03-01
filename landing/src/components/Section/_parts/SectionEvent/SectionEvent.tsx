import React from 'react';
import { Column, Cta, P, Seat, Title, Video, Wrapper } from './SectionEvent.style';
import { Json } from 'redux-store-generator';

export type SectionEventProps = {
  data: Json;
};

export function SectionEvent(props: SectionEventProps) {
  const { data } = props;
  const { title, description, cta, ctaUrl } = data;

  return (
    <Wrapper className='SectionEvent-wrapper' data-testid='SectionEvent-wrapper'>
      <Seat />
      <Video autoPlay loop muted playsInline>
        <source
          src='https://raw.githubusercontent.com/dht/gdi-assets/main/public/videos/workshop.webm'
          type='video/webm'
        />
      </Video>
      <Column>
        <Title>{title}</Title>
        <P>{description}</P>
      </Column>

      <Cta className='button' href={ctaUrl} target='_blank'>
        {cta}
      </Cta>
    </Wrapper>
  );
}

export default SectionEvent;
