import { H2, Input, Wrapper } from './DetailsReviews.style';

export type DetailsReviewsProps = {
  board: any;
  onAction: (action: any) => void;
};

export function DetailsReviews(props: DetailsReviewsProps) {
  const { board } = props;
  const { id } = board;

  function onStartReview() {
    props.onAction({
      type: 'BOARD',
      verb: 'startReview',
      id,
    });
  }

  return (
    <Wrapper className='DetailsReviews-wrapper' data-testid='DetailsReviews-wrapper'>
      <H2>Reviews</H2>
      <Input placeholder='Add a review' onFocus={onStartReview} />
    </Wrapper>
  );
}

export default DetailsReviews;
