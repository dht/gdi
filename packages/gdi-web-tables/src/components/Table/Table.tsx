import React, { useContext } from 'react';
import TableBase from '../TableBase/TableBase';
import TableFilters from '../TableFilters/TableFilters';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import TableTop from '../TableTop/TableTop';
import { Container, Content } from './Table.style';
import { ITableConfig } from '../../types';
import { TableContext, TableContextProvider } from './Table.context';
import { useDelete } from '@gdi/hooks';

export type TableProps = {
    config: ITableConfig;
    data: Json[];
    onAction: (actionType: string) => void;
    onRowAction: (itemId: string, actionType: string) => void;
    doubleClickActionId?: string;
    header?: string;
};

export function TableInner(props: TableProps) {
    const { config, data, doubleClickActionId = 'edit', header } = props;
    const { fields = [], rowActions } = config;
    const context = useContext(TableContext);

    useDelete(() => {
        if (context.selectedId) {
            props.onRowAction(context.selectedId, 'delete');
        }
    }, [context.selectedId]);

    function renderRow(rowProps: any) {
        const { item } = rowProps;

        const isSelected = item.id === context.selectedId;

        function onClick() {
            if (isSelected) {
                return;
            }

            context.patchState({
                selectedId: item.id,
            });
        }

        return (
            <TableRow
                item={item}
                fields={fields}
                rowActions={rowActions}
                isSelected={isSelected}
                onClick={onClick}
                onDoubleClick={() => props.onRowAction(item.id, doubleClickActionId)} // prettier-ignore
                onRowAction={(actionId) => props.onRowAction(item.id, actionId)}
            />
        );
    }

    return (
        <Container className='Table-container' data-testid='Table-container'>
            <TableTop
                data={data}
                config={config}
                onAction={props.onAction}
                header={header}
            />
            <TableFilters config={config} />
            <TableHeader config={config} />
            <Content>
                <TableBase
                    autoHeight={true}
                    itemHeight={80}
                    data={data}
                    mode={'rows'}
                    emptyMessage={'empty'}
                >
                    {renderRow}
                </TableBase>
            </Content>
        </Container>
    );
}

export function Table(props: TableProps) {
    return (
        <TableContextProvider>
            <TableInner {...props} />
        </TableContextProvider>
    );
}

export default Table;
