import TubeCard from '../TubeCard/TubeCard';
import { Cards, Wrapper } from './TubeHome.style';

export type TubeHomeProps = {
  cards: Json[];
  onClick: (id: string) => void;
};

export function TubeHome(props: TubeHomeProps) {
  const { cards = [] } = props;

  function renderCard(card: Json) {
    return <TubeCard key={card.id} onClick={props.onClick} card={card} />;
  }

  function renderCards() {
    return cards.map((card: Json) => renderCard(card));
  }
  return (
    <Wrapper className='TubeHome-wrapper' data-testid='TubeHome-wrapper'>
      <Cards>{renderCards()}</Cards>
    </Wrapper>
  );
}

export default TubeHome;
