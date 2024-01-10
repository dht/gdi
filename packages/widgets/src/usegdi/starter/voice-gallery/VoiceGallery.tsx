import React from 'react';
import {
  Card,
  Wrapper,
  Name,
  Details,
  BigImage,
  Description,
  Items,
  BigName,
  Provider,
  Column,
} from './VoiceGallery.style';
import { VoiceItem } from './VoiceGallery.data';
import classnames from 'classnames';

export type VoiceGalleryProps = {
  items: VoiceItem[];
  currentVoiceId?: string;
  onVoiceClick: (voice: VoiceItem) => void;
};

export function VoiceGallery(props: VoiceGalleryProps) {
  const { items, currentVoiceId } = props;

  const currentVoice = items.find((voice) => voice.id === currentVoiceId);

  function renderItem(voice: VoiceItem) {
    const { title } = voice;

    const style: React.CSSProperties = {
      backgroundImage: `url(${voice.imageUrl})`,
    };

    const className = classnames('voice', {
      selected: currentVoiceId === voice.id,
    });

    return (
      <Card
        key={voice.id}
        style={style}
        className={className}
        onClick={() => props.onVoiceClick(voice)}
      >
        <Name>{title}</Name>
      </Card>
    );
  }

  function renderItems() {
    return items.map((voice: VoiceItem) => renderItem(voice));
  }

  function renderCurrentVoice() {
    if (!currentVoice) {
      return null;
    }

    const { imageUrl, title, description, provider } = currentVoice;

    const style: React.CSSProperties = {
      backgroundImage: `url(${imageUrl})`,
    };

    return (
      <Column>
        <BigImage style={style}></BigImage>
        <Details>
          <BigName>{title}</BigName>
          <Provider>
            by <span>{provider}</span>
          </Provider>
          <Description>{description}</Description>
        </Details>
      </Column>
    );
  }

  return (
    <Wrapper className='VoiceGallery-wrapper' data-testid='VoiceGallery-wrapper'>
      {renderCurrentVoice()}
      <Items>{renderItems()}</Items>
    </Wrapper>
  );
}

export default VoiceGallery;
