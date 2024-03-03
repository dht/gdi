import JsonGrid from '../JsonGrid/JsonGrid';
import Ok from '../Ok/Ok';
import { Description, Details, Identifier, Image, Name, Wrapper } from './ItemLine.style';
import classnames from 'classnames';

export type ItemLineProps = {
  item: Json;
};

export function ItemLine(props: ItemLineProps) {
  const { item } = props;
  const { identifier, name, description, imageUrl, meta, isOk } = item;

  const className = classnames('ItemLine-wrapper', {
    disabled: !isOk,
  });

  const style = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <Wrapper className={className} data-testid='ItemLine-wrapper'>
      <Image style={style}></Image>
      <Details>
        <Identifier>{identifier}</Identifier>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Details>
      <JsonGrid data={meta} />
      <Ok value={isOk} />
    </Wrapper>
  );
}

export default ItemLine;
