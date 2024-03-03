import { isMobile } from '../../utils/mobile';
import Icon from '../Icon/Icon';
import RetroUnix from '../RetroUnix/RetroUnix';
import {
  Actions,
  BoardId,
  Cta,
  Details,
  Image,
  Name,
  Notes,
  Paragraph,
  Wrapper,
} from './GdiIntro.style';

export type GdiIntroProps = {
  boardId: string;
  boardInfo: Json;
  onCta: () => void;
};

export function GdiIntro(props: GdiIntroProps) {
  return (
    <Wrapper className='GdiIntro-wrapper' data-testid='GdiIntro-wrapper'>
      <Image>
        <iframe
          width='100%'
          height={isMobile() ? 300 : 400}
          src='https://www.youtube.com/embed/me5Ln7BwnJI'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
          allowFullScreen
        ></iframe>
      </Image>
      <Details>
        <BoardId>Welcome to</BoardId>
        <Name>Your New Digital Realm</Name>
        <Paragraph>
          Generate tutorials, animations, analyze data, write TDD tests, and more. With GDI, task
          management, content creation, and knowledge acquisition are amplified. A unified workspace
          for the AI Area.
        </Paragraph>
      </Details>
      <Actions>
        <Notes>
          <span>Join us on this journey</span> to build a unified toolkit for AI super users.
        </Notes>
        <Cta color='secondary' onClick={props.onCta} analyticsId='gdi.intro.start'>
          <Icon name='play_arrow' />
          Start
        </Cta>
      </Actions>
    </Wrapper>
  );
}

export default GdiIntro;
