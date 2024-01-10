import { Wrapper } from './Facebook.style';
import { FacebookEmbed } from 'react-social-media-embed';

export type FacebookProps = {};

export function Facebook(_props: FacebookProps) {
  return (
    <Wrapper className='Facebook-wrapper' data-testid='Facebook-wrapper'>
      <FacebookEmbed url='https://www.facebook.com/NGM/photos/a.406883368335/10161041907538336/' />
    </Wrapper>
  );
}

export default Facebook;
