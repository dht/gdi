import React, { useContext } from 'react';
import GenericTable from '../GenericTable/GenericTable';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import { Container, Content } from './Table.style';
import { ITableConfig } from '../../types';
import { useDelete } from '@gdi/hooks';
import { TableContextProvider } from '../../context/Table.context';
import { SelectionContext } from '../../context/Selection.context';

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
    const contextSelection = useContext(SelectionContext);
    const { state: selectedIds } = contextSelection;

    useDelete(() => {
        if (selectedIds.length > 0) {
            props.onAction('delete');
        }
    }, [selectedIds, data]);

    function renderRow(rowProps: any) {
        const { item } = rowProps;

        const isSelected = selectedIds.includes(item.id);

        function onClick() {
            if (isSelected) {
                return;
            }

            contextSelection.callbacks.onSelect(item.id);
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
            <TableHeader config={config} />
            <Content>
                <GenericTable
                    autoHeight={true}
                    itemHeight={80}
                    data={data}
                    mode={'rows'}
                    emptyMessage={'empty'}
                >
                    {renderRow}
                </GenericTable>
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
