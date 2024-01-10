import Icon from '../Icon/Icon';
import {
  Action,
  Actions,
  Column,
  Empty,
  EmptyMessage,
  Item,
  Items,
  Wrapper,
} from './ElementList.style';
import { ListAction, ListColumn } from './ElementList.types';
import { parseData } from './ElementList.utils';
import { allColumns } from './ElementListColumns';
import classnames from 'classnames';

export type ElementListProps = {
  items: Json[];
  columns: ListColumn[];
  actions: ListAction[];
  onAction: (actionId: string, itemId: string) => void;
  emptyMessage?: string;
};

export function ElementList(props: ElementListProps) {
  const { items, columns, actions, emptyMessage = 'No items' } = props;

  function renderAction(action: ListAction, item: Json) {
    const { iconName, showIf } = action;

    if (showIf && !showIf(item)) {
      return null;
    }

    return (
      <Action key={action.id} name={iconName} onClick={() => props.onAction(action.id, item.id)} />
    );
  }

  function renderActions(item: Json) {
    return actions.map((action: ListAction) => renderAction(action, item));
  }

  function renderColumn(column: ListColumn, item: Json) {
    const { type = 'single', flex } = column;
    const Cmp = allColumns[type];

    if (!Cmp) {
      console.warn('No column component for id:', column.id);
      return null;
    }

    const data = parseData(item, column);

    const style: React.CSSProperties = {};

    if (flex) {
      style.flex = flex;
    }

    return (
      <Column key={column.id} style={style}>
        <Cmp data={data} />
      </Column>
    );
  }

  function renderColumns(item: Json) {
    return columns.map((column: ListColumn) => renderColumn(column, item));
  }

  function renderItem(item: Json) {
    const className = classnames('item', {
      hidden: item.isVisible === false,
    });

    return (
      <Item key={item.id} className={className}>
        {renderColumns(item)}
        <Actions>{renderActions(item)}</Actions>
      </Item>
    );
  }

  function renderItems() {
    if (!items.length) {
      return renderEmpty();
    }

    return items.map((item: Json) => renderItem(item));
  }

  function renderEmpty() {
    return (
      <Empty>
        <Icon size={50} name='database' />
        <EmptyMessage>{emptyMessage}</EmptyMessage>
      </Empty>
    );
  }

  return (
    <Wrapper className='ElementList-wrapper' data-testid='ElementList-wrapper'>
      <Items>{renderItems()}</Items>
    </Wrapper>
  );
}

export default ElementList;
