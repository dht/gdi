import { Description, Identifier, OneLiner, Row, Section, Wrapper } from './DetailsSummary.style';

export type DetailsSummaryProps = {
  board: any;
  children: React.ReactNode;
  onAction: (action: any) => void;
};

export function DetailsSummary(props: DetailsSummaryProps) {
  const { board } = props;
  const { identifier, boardInfo } = board;
  const { oneLinerShort, descriptionLong } = boardInfo;

  return (
    <Wrapper className='DetailsSummary-wrapper' data-testid='DetailsSummary-wrapper'>
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
