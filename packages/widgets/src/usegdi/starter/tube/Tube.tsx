import { DidYouKnow, TubeHome, TubeVideo, UnderConstruction, isMobile } from '@gdi/ui';
import ScenePlayerContainer from '../scene-player/ScenePlayer.container';
import { Gap, Tip, Top, Wrapper } from './Tube.style';
import TubeLogo from './_parts/TubeLogo/TubeLogo';
import BabylonLogo from './_parts/BabylonLogo/BabylonLogo';

export type TubeProps = {
  cards: Json[];
  clipId?: string;
  flavour: 'tube' | 'babylon';
  callbacks: {
    onClick: (id: string) => void;
    onLogoClick: () => void;
  };
};

export function Tube(props: TubeProps) {
  const { cards, clipId, flavour, callbacks } = props;

  const card = cards.find((card) => card.id === clipId);
  const minimal = flavour === 'babylon';

  function renderInner() {
    if (card) {
      return (
        <TubeVideo card={card}>
          <ScenePlayerContainer />
        </TubeVideo>
      );
    } else {
      return <TubeHome minimal={minimal} cards={cards} onClick={callbacks.onClick} />;
    }
  }

  function renderLogo() {
    const Cmp = flavour === 'tube' ? TubeLogo : BabylonLogo;
    return <Cmp onClick={callbacks.onLogoClick} />;
  }

  function renderDidYouKnow() {
    if (minimal || isMobile()) {
      return;
    }

    return (
      <DidYouKnow>
        Gdi Videos are <span>JSONs</span> and can be easily forked, modified & versioned. When
        combined with AI, they transform into interactive experiences that{' '}
        <span>respond in real-time to user actions</span>.
      </DidYouKnow>
    );
  }

  function renderTop() {
    if (isMobile() && card) {
      return null;
    }

    return (
      <Top>
        <Gap />
        {renderLogo()}
        <Tip>{renderDidYouKnow()}</Tip>
      </Top>
    );
  }

  function renderUnderConstruction() {
    if (card) return null;

    return <UnderConstruction small />;
  }

  return (
    <Wrapper className='Tube-wrapper' data-testid='Tube-wrapper'>
      {renderTop()}
      {renderInner()}
      {renderUnderConstruction()}
    </Wrapper>
  );
}

export default Tube;
