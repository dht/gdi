import React, { RefObject, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Item, Wrapper } from './Menu.style';
import classnames from 'classnames';

export type MenuProps = {
  items: Json[];
  target: HTMLElement;
  onClick: (item: Json) => void;
  onCancel: () => void;
};

export function Menu(props: MenuProps) {
  const { items = [], target } = props;
  const ref = useRef<HTMLDivElement>(null);

  const portalRoot = document.body;

  const style: React.CSSProperties = useMemo(() => {
    const boundingClientRect = target.getBoundingClientRect();

    return {
      top: boundingClientRect.top + boundingClientRect.height + 10,
      left: boundingClientRect.left - 130,
    };
  }, [target]);

  useEffect(() => {
    function onClick(ev: MouseEvent) {
      const { target } = ev;

      if (target instanceof HTMLElement) {
        const { current } = ref;

        if (current && !current.contains(target)) {
          props.onCancel();
        }
      }
    }

    setTimeout(() => {
      document.addEventListener('click', onClick);
    }, 100);

    return () => {
      document.removeEventListener('click', onClick);
    };
  });

  function onClick(ev: React.MouseEvent<HTMLElement>, item: Json) {
    ev.stopPropagation();
    props.onClick(item);
  }

  function renderItem(item: Json) {
    const { name, divider } = item;

    const className = classnames('item', {
      divider,
    });

    return (
      <Item key={item.id} className={className} onClick={(ev) => onClick(ev, item)}>
        {name}
      </Item>
    );
  }

  function renderItems() {
    return items.map((item: Json) => renderItem(item));
  }

  return ReactDOM.createPortal(
    <Wrapper style={style} className='Menu-wrapper' data-testid='Menu-wrapper' ref={ref}>
      {renderItems()}
    </Wrapper>,
    portalRoot
  );
}

export default Menu;
