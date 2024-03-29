import { useMount } from 'react-use';
import { Left, Right, Row, Wrapper } from './BoardDetailsPage.style';
import { DetailsApis } from './_parts/DetailsApis/DetailsApis';
import { DetailsCta } from './_parts/DetailsCta/DetailsCta';
import { DetailsHeader } from './_parts/DetailsHeader/DetailsHeader';
import { DetailsImages } from './_parts/DetailsImages/DetailsImages';
import { DetailsLinks } from './_parts/DetailsLinks/DetailsLinks';
import { DetailsReviews } from './_parts/DetailsReviews/DetailsReviews';
import { DetailsSummary } from './_parts/DetailsSummary/DetailsSummary';
import { DetailsTutorials } from './_parts/DetailsTutorials/DetailsTutorials';

export type BoardDetailsPageProps = {
  board: any;
  onAction: (action: any) => void;
};

export function BoardDetailsPage(props: BoardDetailsPageProps) {
  const { board } = props;

  useMount(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Wrapper>
      <DetailsHeader board={board} onAction={props.onAction} />
      <DetailsImages board={board} onAction={props.onAction} />
      <Row>
        <Left>
          <DetailsSummary board={board} onAction={props.onAction}>
            <DetailsLinks board={board} onAction={props.onAction} />
          </DetailsSummary>
          <DetailsTutorials board={board} onAction={props.onAction} />
          <DetailsReviews board={board} onAction={props.onAction} />
        </Left>
        <Right>
          <DetailsCta board={board} onAction={props.onAction}>
            <DetailsApis board={board} />
          </DetailsCta>
        </Right>
      </Row>
    </Wrapper>
  );
}

export default BoardDetailsPage;
