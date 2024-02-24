import { Json } from '../../../../types';
import { Category, CategoryItems, CategoryTitle, Item, Wrapper } from './Menu.style';
import classnames from 'classnames';

export type MenuProps = {
  data?: Json;
  isLoading?: boolean;
  onSelect: (item: Json) => void;
  modal?: boolean;
};

export function Menu(props: MenuProps) {
  const { data, isLoading, modal } = props;
  const { categories = [], items } = data ?? {};

  const hash = document.location.hash.replace('#', '');

  function renderItem(item: Json) {
    const { title } = item;

    const isSelected = item.path === hash;

    const classNameItem = classnames('item', {
      selected: isSelected,
    });

    return (
      <Item key={item.path} className={classNameItem} onClick={() => props.onSelect(item)}>
        {title}
      </Item>
    );
  }

  function renderItems(categoryId: string) {
    return items
      .filter((item: Json) => item.category === categoryId)
      .map((item: Json) => renderItem(item));
  }

  function renderCategory(category: Json) {
    const { title } = category;
    return (
      <Category key={category.id} className='category'>
        <CategoryTitle className='categoryTitle'>{title}</CategoryTitle>
        <CategoryItems className='items'>{renderItems(category.id)}</CategoryItems>
      </Category>
    );
  }

  function renderCategories() {
    return categories.map((category: Json) => renderCategory(category));
  }

  const className = classnames('Menu-wrapper', {
    modal,
  });

  return (
    <Wrapper className={className} data-testid='Menu-wrapper'>
      {renderCategories()}
    </Wrapper>
  );
}

export default Menu;
