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
        <RetroUnix>
          ||||Hi :-)|||_ Join us in building new &amp; exciting AI interfaces.||| Why?|| Well, while
          chat-based interfaces are great for some tasks, GUIs can be far more efficient for many
          others.|||_Simply fork an existing UI and make it your own.||Ah, and remember, anything is
          possible with GDI, the only limit is your imagination!
        </RetroUnix>
      </Image>
      <Details>
        <BoardId>Create & use fusion interfaces</BoardId>
        <Name>Welcome to GDI</Name>
        <Paragraph>
          Build the user interfaces of the AI era. GDI simplifies tasks such as asset management,
          model orchestration, data management and cost optimization while allowing you to fork and
          improve upon others' work.
        </Paragraph>
      </Details>
      <Actions>
        <Notes>
          <span>Join us on this journey</span> to put a face on the AI revolution.
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
