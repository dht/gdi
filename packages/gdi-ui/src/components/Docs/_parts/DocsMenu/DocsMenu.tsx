import { Category, CategoryItems, CategoryTitle, Item, Wrapper } from './DocsMenu.style';
import classnames from 'classnames';

export type DocsMenuProps = {
  data?: Json;
  isLoading?: boolean;
  onSelect: (doc: Json) => void;
};

export function DocsMenu(props: DocsMenuProps) {
  const { data, isLoading } = props;
  const { categories = [], docs } = data ?? {};

  const hash = document.location.hash.replace('#', '');

  function renderItem(doc: Json) {
    const { title } = doc;

    const isSelected = doc.path === hash;

    const className = classnames('item', {
      selected: isSelected,
    });

    return (
      <Item key={doc.path} className={className} onClick={() => props.onSelect(doc)}>
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
        <CategoryTitle>{title}</CategoryTitle>
        <CategoryItems>{renderItems(category.id)}</CategoryItems>
      </Category>
    );
  }

  function renderCategories() {
    return categories.map((category: Json) => renderCategory(category));
  }

  return (
    <Wrapper className='DocsMenu-wrapper' data-testid='DocsMenu-wrapper'>
      {renderCategories()}
    </Wrapper>
  );
}

export default DocsMenu;
