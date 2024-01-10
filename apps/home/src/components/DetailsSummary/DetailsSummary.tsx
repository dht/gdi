import { IBoard } from '@gdi/store-base';
import { ActionHome } from '../../sagas/saga.home';
import {
  Description,
  Identifier,
  OneLiner,
  Row,
  Section,
  Wrapper,
} from './DetailsSummary.style';

export type DetailsSummaryProps = {
  board: IBoard;
  children: React.ReactNode;
  onAction: (action: ActionHome) => void;
};

export function DetailsSummary(props: DetailsSummaryProps) {
  const { board } = props;
  const { identifier, boardInfo } = board;
  const { oneLinerShort, descriptionLong } = boardInfo;

  return (
    <Wrapper
      className='DetailsSummary-wrapper'
      data-testid='DetailsSummary-wrapper'
    >
      <Section>
        <OneLiner>{oneLinerShort}</OneLiner>
        <Row>
          <Identifier>{identifier}</Identifier>
        </Row>
      </Section>
      <Section>{props.children}</Section>
      <Section>
        <Description>{descriptionLong}</Description>
      </Section>
    </Wrapper>
  );
}

export default DetailsSummary;
