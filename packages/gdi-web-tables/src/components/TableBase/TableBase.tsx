import React, { useMemo, useRef } from 'react';
import { Container, Empty, Item } from './TableBase.style';
import { FixedSizeList } from 'react-window';
import { useBoundingClientRect } from '../../utils/useBoundingClientRect';

export type TableBaseProps = {
    data: any;
    children: (props: any) => JSX.Element;
    height?: number;
    mode: 'grid' | 'rows';
    itemWidth?: number;
    itemHeight?: number;
    emptyMessage?: string;
    autoHeight?: boolean;
};

export function TableBase(props: TableBaseProps) {
    const {
        mode,
        data = [],
        itemWidth = 35,
        itemHeight = 35,
        children: Row,
        emptyMessage = 'Empty table',
        autoHeight = false,
    } = props;
    const ref = useRef(null);

    const { width = 120, height = 100 } = useBoundingClientRect(ref);

    const itemsPerRows = useMemo(() => {
        return (width || 120) / itemWidth;
    }, [width]);

    const rows = useMemo(() => {
        const arrLength = Math.ceil(data.length / itemsPerRows);
        const arr = [...new Array(arrLength)];
        return arr.map((_i, index) => ({ id: index }));
    }, [data, itemsPerRows]);

    function renderRow(rowId: number) {
        const items = [...data].splice(
            (rowId - 1) * itemsPerRows,
            itemsPerRows
        );

        return items.map((item: any) => props.children(item));
    }

    if (data.length === 0) {
        return (
            <Container className='Table-container' ref={ref}>
                <Empty>{emptyMessage}</Empty>
            </Container>
        );
    }

    const TableRow = (rowProps: any) => {
        const { index, style = {} } = rowProps;
        const item = rowProps.data[index];

        const inner = mode === 'grid' ? renderRow(index) : <Row item={item} />;

        return (
            <Item index={index} key={item.id} style={{ ...style }}>
                {inner}
            </Item>
        );
    };

    const itemData = mode === 'grid' ? rows : data;

    function renderTable() {
        return (
            <FixedSizeList
                className='table'
                height={autoHeight ? height : props.height || 0}
                itemCount={itemData.length}
                itemSize={itemHeight}
                itemData={itemData}
                width='100%'
            >
                {TableRow}
            </FixedSizeList>
        );
    }

    return (
        <Container
            className='TableBase-container'
            data-testid='TableBase-container'
            ref={ref}
        >
            {renderTable()}
        </Container>
    );
}

export default TableBase;
