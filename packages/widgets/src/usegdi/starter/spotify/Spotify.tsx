import React from 'react';
import { Wrapper } from './Spotify.style';

export type SpotifyProps = {};

export function Spotify(_props: SpotifyProps) {
  const url = 'https://open.spotify.com/embed/track/60Ur7FtoQjDLFS1f2yCIcs?utm_source=generator';

  return (
    <Wrapper className='Spotify-wrapper' data-testid='Spotify-wrapper'>
      <iframe
        style={{ borderRadius: '12px' }}
        src={url}
        width='100%'
        height='352'
        frameBorder='0'
        allowFullScreen={true}
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
    </Wrapper>
  );
}

export default Spotify;
