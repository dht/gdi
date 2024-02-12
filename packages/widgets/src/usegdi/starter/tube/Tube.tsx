import { TubeHome, UnderConstruction } from '@gdi/ui';
import { Wrapper } from './Tube.style';

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
  const { cards, flavour, callbacks } = props;

  const minimal = flavour === 'babylon';

  return (
    <Wrapper className='Tube-wrapper' data-testid='Tube-wrapper'>
      <TubeHome minimal={minimal} cards={cards} callbacks={callbacks} />;
      <UnderConstruction small />
    </Wrapper>
  );
}

export default Tube;
