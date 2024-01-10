import { useContext } from 'react';
import { useMount } from 'react-use';
import { Json } from '../../types';
import { TableContext } from './Table.context';
import { Wrapper } from './Table.style';
import GenericTable from './_parts/GenericTable/GenericTable';
import TableRow from './_parts/TableRow/TableRow';
import TableHeader from './_parts/TableHeader/TableHeader';

export type TableProps = {
  items: Json[];
};

export function Table(props: TableProps) {
  const { items } = props;
  const { callbacks, patchState, state } = useContext(TableContext);
  const { config, isReady } = state;
  const { fields = [], rowActions } = config;

  useMount(() => {
    patchState({
      sortDirection: 'asc',
    });
  });

  if (!isReady) {
    return null;
  }

  function renderRow(rowProps: any) {
    const { item } = rowProps;

    const isSelected = false;

    function onClick() {
      if (isSelected) {
        return;
      }
    }

    return (
      <TableRow
        item={item}
        fields={fields}
        rowActions={rowActions}
        isSelected={isSelected}
        onClick={onClick}
        onDoubleClick={() => {}}
        onRowAction={() => {}}
      />
    );
  }

  return (
    <Wrapper className='Table-wrapper' data-testid='Table-wrapper'>
      <TableHeader config={config} />
      <GenericTable
        autoHeight={true}
        itemHeight={40}
        data={items}
        mode={'rows'}
        emptyMessage={'empty'}
      >
        {renderRow}
      </GenericTable>
    </Wrapper>
  );
}

export default Table;
