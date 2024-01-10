import { useMemo } from 'react';
import { Json } from '../../types';
import Table from './Table';
import { TableProvider } from './Table.context';
import { ITableCallbacks, ITableConfig } from './Table.types';

export type TableProps = {
  config?: ITableConfig;
  callbacks: ITableCallbacks;
  data: Json[];
};

export function TableContainer(props: TableProps) {
  const { config, data } = props;

  const initialState = useMemo(() => {
    return {
      config,
    };
  }, []);

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, _params?: Json) => {},
      onSort: () => {},
    }),
    []
  );

  return (
    <TableProvider callbacks={callbacks} state={initialState}>
      <Table items={data} />
    </TableProvider>
  );
}

export default TableContainer;
