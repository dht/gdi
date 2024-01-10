import classnames from 'classnames';
import Draggable from 'react-draggable';
import { Item, Items, Top, Wrapper } from './Toolbox.style';

export type ToolboxProps = {
  items: Json[];
  selectedId: string;
  callbacks: {
    onAction: (id: string) => void;
  };
  horizontal?: boolean;
  className?: string;
};

export function Toolbox(props: ToolboxProps) {
  const { items, selectedId, horizontal, callbacks } = props;

  function renderItem(item: Json) {
    const { id, iconName, title } = item;

    const className = classnames('item', {
      selected: id === selectedId,
    });

    return (
      <Item
        key={item.id}
        className={className}
        title={title}
        onClick={() => callbacks.onAction(id)}
      >
        <span className='material-symbols-outlined'>{iconName}</span>
      </Item>
    );
  }

  function renderItems() {
    return items.map((item: Json) => renderItem(item));
  }

  const className = classnames('Toolbox-wrapper', props.className, {
    horizontal: horizontal,
  });

  return (
    <Draggable handle='.top'>
      <Wrapper className={className} data-testid='Toolbox-wrapper'>
        <Top className='top'></Top>
        <Items className='items'>{renderItems()}</Items>
      </Wrapper>
    </Draggable>
  );
}

export default Toolbox;
