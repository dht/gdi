import { IBoard } from '@gdi/store-base';
import { useMount } from 'react-use';
import DetailsApis from '../../components/DetailsApis/DetailsApis';
import DetailsCta from '../../components/DetailsCta/DetailsCta';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import DetailsImages from '../../components/DetailsImages/DetailsImages';
import DetailsLinks from '../../components/DetailsLinks/DetailsLinks';
import DetailsReviews from '../../components/DetailsReviews/DetailsReviews';
import DetailsSummary from '../../components/DetailsSummary/DetailsSummary';
import { ActionHome } from '../../sagas/saga.home';
import BasePage from '../BasePage';
import { Left, Right, Row } from './BoardDetailsPage.style';

export type BoardDetailsPageProps = {
  board: IBoard;
  onAction: (action: ActionHome) => void;
};

export function BoardDetailsPage(props: BoardDetailsPageProps) {
  const { board } = props;

  useMount(() => {
    window.scrollTo(0, 0);
  });

  return (
    <BasePage narrowWidth>
      <DetailsHeader board={board} onAction={props.onAction} />
      <DetailsImages board={board} onAction={props.onAction} />
      <Row>
        <Left>
          <DetailsSummary board={board} onAction={props.onAction}>
            <DetailsLinks board={board} onAction={props.onAction} />
          </DetailsSummary>
          <DetailsReviews board={board} onAction={props.onAction} />
        </Left>
        <Right>
          <DetailsCta board={board} onAction={props.onAction}>
            <DetailsApis board={board} />
          </DetailsCta>
        </Right>
      </Row>
    </BasePage>
  );
}

export default BoardDetailsPage;
