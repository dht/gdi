import { TikTokEmbed } from 'react-social-media-embed';
import { Wrapper } from './TikTok.style';

export type TikTokProps = {};

export function TikTok(_props: TikTokProps) {
  return (
    <Wrapper className='TikTok-wrapper' data-testid='TikTok-wrapper'>
      <TikTokEmbed url='https://www.tiktok.com/@imaeternal/video/7186315021004197126?lang=en&q=setup&t=1685846492253' />
    </Wrapper>
  );
}

export default TikTok;
