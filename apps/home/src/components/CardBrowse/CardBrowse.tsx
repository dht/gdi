import {
  Content,
  Cta,
  Description,
  Details,
  Subtitle,
  Title,
  Wrapper,
} from './CardBrowse.style';

export type CardBrowseProps = {
  callbacks: {
    onClick: () => void;
  };
};

export function CardBrowse(props: CardBrowseProps) {
  const { callbacks } = props;

  return (
    <Wrapper
      onClick={callbacks.onClick}
      className='CardBrowse-wrapper'
      data-testid='CardBrowse-wrapper'
    >
      <Content className='content'>
        <Cta onClick={callbacks.onClick}>Browse All Boards</Cta>
      </Content>
      <Details>
        <Title className='title'>Z. Board Gallery</Title>
        <Subtitle>Browse & install</Subtitle>
        <Description>
          Dozens of boards are available in the gallery. After installing a
          board from the Gallery it will appear here in the Home Page.
        </Description>
      </Details>
    </Wrapper>
  );
}

export default CardBrowse;
