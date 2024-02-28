import classnames from 'classnames';
import { useContext } from 'react';
import { FixedSizeList } from 'react-window';
import { ListContext, ListProvider } from './List.context';
import { useMeasureOnce } from './List.hooks';
import { Cell, Item, Q, Root, Top, Wrapper } from './List.style';
import { Column } from './List.types';
import { formatCell } from './List.utils';

export type ListProps = {
  data: any[];
  columns: Column[];
  isFocused: boolean;
  onDrillDown: (asset: any) => void;
  onDrillUp: () => void;
  onPreview: (asset: any) => void;
  onFunctionKey: (asset: any, key: string, ev: any) => void;
  renderActions?: (callbacks: any) => React.ReactNode;
  root: string;
  darkMode?: boolean;
};

export function ListInner(props: ListProps) {
  const { root = '', columns, isFocused, darkMode = true } = props;
  const { data, state, callbacks } = useContext(ListContext);
  const { focusedId, q } = state;
  const [ref, { height }] = useMeasureOnce();

  function renderRowCells(rowData: Json) {
    return columns.map((column) => {
      const { id, fieldId, fieldType = 'text', flex = 1, width } = column;
      const cellData = formatCell(rowData[fieldId], fieldType);

      const style: React.CSSProperties = {
        flex,
      };

      if (width) {
        style['maxWidth'] = width + 'px';
        style['padding'] = '0 5px';
      }

      return (
        <Cell key={id} style={style}>
          {cellData}
        </Cell>
      );
    });
  }

  function renderItem(rowProps: any) {
    const { data, index, style } = rowProps;
    const rowData = data[index];
    const { id } = rowData;

    const className = classnames('item', {
      odd: index % 2 === 0,
      focused: id === focusedId,
    });

    return (
      <Item style={style} key={id} className={className} onMouseDown={() => callbacks.onClick(id)}>
        {renderRowCells(rowData)}
      </Item>
    );
  }

  function renderHeaderCells() {
    return columns.map((column) => {
      const { id, fieldId, title, flex = 1, width } = column;

      const style: React.CSSProperties = {
        flex,
      };

      if (width) {
        style['maxWidth'] = width + 'px';
        style['padding'] = '0 5px';
      }

      return (
        <Cell key={id} style={style} className='header' onClick={() => callbacks.onSort(fieldId)}>
          {title}
        </Cell>
      );
    });
  }

  function renderTop() {
    return (
      <Top>
        <Root>{root.replace('$', '')}</Root>
      </Top>
    );
  }

  function renderHeader() {
    return <Item className='header'>{renderHeaderCells()}</Item>;
  }

  function renderActions() {
    if (!props.renderActions) {
      return null;
    }

    return props.renderActions(callbacks);
  }

  const className = classnames('List-wrapper', {
    focused: isFocused,
    dark: darkMode,
  });

  return (
    <Wrapper className={className} data-testid='List-wrapper' ref={ref}>
      {renderTop()}
      {renderHeader()}
      <FixedSizeList
        itemData={data}
        height={height - 60}
        width={'100%'}
        itemSize={30}
        itemCount={data.length}
      >
        {renderItem}
      </FixedSizeList>
      {q && (
        <Q>
          <span>Search:</span> {q}
        </Q>
      )}
      {renderActions()}
    </Wrapper>
  );
}

export function List(props: ListProps) {
  return (
    <ListProvider {...props}>
      <ListInner {...props} />
    </ListProvider>
  );
}

export default List;
