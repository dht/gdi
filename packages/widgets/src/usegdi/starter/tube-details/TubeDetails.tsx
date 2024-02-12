import { TubeVideo, UnderConstruction } from '@gdi/ui';
import { useEffect } from 'react';
import { invokeEvent } from 'shared-base';
import ScenePlayerContainer from '../scene-player/ScenePlayer.container';
import { Wrapper } from './TubeDetails.style';

export type TubeDetailsProps = {
  cards: Json[];
  clipId?: string;
  flavour: 'tube' | 'babylon';
  callbacks: {
    onClick: (id: string) => void;
    onLogoClick: () => void;
  };
};

export function TubeDetails(props: TubeDetailsProps) {
  const { cards, clipId, flavour, callbacks } = props;

  const clip = cards.find((card) => card.id === clipId);
  const minimal = flavour === 'babylon';

  useEffect(() => {
    if (!clip) return;

    invokeEvent('tube/load', { clip });
  }, [clip]);

  return (
    <Wrapper className='TubeDetails-wrapper' data-testid='TubeDetails-wrapper'>
      <TubeVideo cards={cards} card={clip} minimal={minimal} callbacks={callbacks}>
        <ScenePlayerContainer />
      </TubeVideo>
      <UnderConstruction small />
    </Wrapper>
  );
}

export default TubeDetails;
