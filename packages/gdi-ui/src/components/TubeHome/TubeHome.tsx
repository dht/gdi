import { useMeasure } from 'react-use';
import TubeCard from '../TubeCard/TubeCard';
import { Cards, Wrapper } from './TubeHome.style';
import classnames from 'classnames';
import { useMeasureOnce } from '../../hooks/useMeasureOnce';
import TubeTop from '../TubeTop/TubeTop';

export type TubeHomeProps = {
  cards: Json[];
  minimal?: boolean;
  callbacks: {
    onClick: (id: string) => void;
    onLogoClick: () => void;
  };
};

export function TubeHome(props: TubeHomeProps) {
  const { cards = [], minimal, callbacks } = props;
  const [ref, { width }] = useMeasureOnce();

  const cardWidth = minimal ? width / 8.2 : undefined;

  function renderCard(card: Json) {
    return (
      <TubeCard
        key={card.id}
        width={cardWidth}
        minimal={minimal}
        onClick={callbacks.onClick}
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
      <TubeTop ctaText='GDI Home' minimal={minimal} callbacks={callbacks} />
      <Cards ref={ref} className='cards'>
        {renderCards()}
      </Cards>
    </Wrapper>
  );
}

export default TubeHome;
