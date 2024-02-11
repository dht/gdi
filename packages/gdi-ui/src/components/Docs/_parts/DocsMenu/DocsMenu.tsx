import { Category, CategoryItems, CategoryTitle, Item, Wrapper } from './DocsMenu.style';
import classnames from 'classnames';

export type DocsMenuProps = {
  data?: Json;
  isLoading?: boolean;
  onSelect: (doc: Json) => void;
  modal?: boolean;
};

export function DocsMenu(props: DocsMenuProps) {
  const { data, isLoading, modal } = props;
  const { categories = [], docs } = data ?? {};

  const hash = document.location.hash.replace('#', '');

  function renderItem(doc: Json) {
    const { title } = doc;

    const isSelected = doc.path === hash;

    const classNameItem = classnames('item', {
      selected: isSelected,
    });

    return (
      <Item key={doc.path} className={classNameItem} onClick={() => props.onSelect(doc)}>
        {title}
      </Item>
    );
  }

  function renderItems(categoryId: string) {
    return docs
      .filter((doc: Json) => doc.category === categoryId)
      .map((doc: Json) => renderItem(doc));
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

  const className = classnames('DocsMenu-wrapper', {
    modal,
  });

  return (
    <Wrapper className={className} data-testid='DocsMenu-wrapper'>
      {renderCategories()}
    </Wrapper>
  );
}

export default DocsMenu;
