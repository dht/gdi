import { useMeasure } from 'react-use';
import TubeCard from '../TubeCard/TubeCard';
import { Cards, Wrapper } from './TubeHome.style';
import classnames from 'classnames';
import { useMeasureOnce } from '../../hooks/useMeasureOnce';

export type TubeHomeProps = {
  cards: Json[];
  onClick: (id: string) => void;
  minimal?: boolean;
};

export function TubeHome(props: TubeHomeProps) {
  const { cards = [], minimal } = props;
  const [ref, { width }] = useMeasureOnce();

  const cardWidth = minimal ? width / 8.2 : undefined;

  function renderCard(card: Json) {
    return (
      <TubeCard
        key={card.id}
        width={cardWidth}
        minimal={minimal}
        onClick={props.onClick}
        card={card}
      />
    );
  }

  function renderCards() {
    return cards.map((card: Json) => renderCard(card));
  }

  const className = classnames('Tube-wrapper', {
    minimal,
  });

  return (
    <Wrapper className={className} data-testid='TubeHome-wrapper'>
      <Cards ref={ref} className='cards'>
        {renderCards()}
      </Cards>
    </Wrapper>
  );
}

export default TubeHome;
