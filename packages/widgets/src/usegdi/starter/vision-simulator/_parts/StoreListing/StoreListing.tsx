import {
  Author,
  Cta,
  Description,
  Details,
  Image,
  Price,
  Row,
  Subtitle,
  Title,
  Wrapper,
} from './StoreListing.style';

export type StoreListingProps = {
  data: Json;
};

export function StoreListing(props: StoreListingProps) {
  const { data } = props;
  const { title, slogan, author, price, description, url } = data;

  function onCta() {
    window.open(url, '_blank');
  }

  return (
    <Wrapper className='StoreListing-wrapper' data-testid='StoreListing-wrapper'>
      <Row>
        <Image />
        <Details>
          <Title>{title}</Title>
          <Subtitle>{slogan}</Subtitle>
          <Author>
            by <span>{author}</span>
          </Author>
        </Details>
      </Row>
      <Price>{price}</Price>
      <Description>{description}</Description>
      <Cta onClick={onCta}>
        Buy {title} ({price})
      </Cta>
    </Wrapper>
  );
}

export default StoreListing;
