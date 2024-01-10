import classNames from 'classnames';
import React from 'react';
import Icon from '../../../Icon/Icon';
import { items } from './Filter.data';
import { Container, Image, Item, Items, Line, Title, Wrapper } from './Filter.style';

export type FilterProps = {
  value: string;
  onChange: (value: string) => void;
};

export function Filter(props: FilterProps) {
  const { value } = props;

  function onClick(id: string) {
    if (value === id) {
      props.onChange('');
      return;
    }

    props.onChange(id);
  }

  function renderItem(item: Json) {
    return (
      <FilterItem
        key={item.id}
        item={item}
        selected={value === item.id}
        onClick={() => onClick(item.id)}
      />
    );
  }

  function renderItems() {
    return <Items>{items.map((item: Json) => renderItem(item))}</Items>;
  }

  const className = classNames('Filter-wrapper', {});

  return (
    <Wrapper className={className} data-testid='Filter-wrapper'>
      <Container>{renderItems()}</Container>
    </Wrapper>
  );
}

export function FilterItem(props: any) {
  const { item, selected } = props;
  const { iconName, name, width } = item;

  const style: React.CSSProperties = {
    width,
  };

  const className = classNames('item', {
    selected,
  });

  return (
    <Item className={className} onClick={props.onClick}>
      <Image>
        <Icon name={iconName} />
      </Image>
      <Title className='title'>{name}</Title>
      <Line style={style}></Line>
    </Item>
  );
}

export default Filter;
