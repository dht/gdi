import { DidYouKnow, TubeHome, TubeVideo, UnderConstruction } from '@gdi/ui';
import ScenePlayerContainer from '../scene-player/ScenePlayer.container';
import { Gap, Tip, Top, Wrapper } from './Tube.style';
import TubeLogo from './_parts/TubeLogo/TubeLogo';

export type TubeProps = {
  cards: Json[];
  clipId?: string;
  callbacks: {
    onClick: (id: string) => void;
    onLogoClick: () => void;
  };
};

export function Tube(props: TubeProps) {
  const { cards, clipId, callbacks } = props;

  const card = cards.find((card) => card.id === clipId);

  function renderInner() {
    if (card) {
      return (
        <TubeVideo card={card}>
          <ScenePlayerContainer />
        </TubeVideo>
      );
    } else {
      return <TubeHome cards={cards} onClick={callbacks.onClick} />;
    }
  }

  return (
    <Wrapper className='Tube-wrapper' data-testid='Tube-wrapper'>
      <Top>
        <Gap />
        <TubeLogo onClick={callbacks.onLogoClick} />
        <Tip>
          <DidYouKnow>
            Gdi Videos are <span>JSONs</span> and can be easily forked, modified & versioned. When
            combined with AI, they transform into interactive experiences that{' '}
            <span>respond in real-time to user actions</span>.
          </DidYouKnow>
        </Tip>
      </Top>
      {renderInner()}
      <UnderConstruction small />
    </Wrapper>
  );
}

export default Tube;
