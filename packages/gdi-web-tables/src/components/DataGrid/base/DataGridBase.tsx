import React, { useMemo, useRef } from 'react';
import { Container, Empty, Item } from './DataGridBase.style';
import { FixedSizeList } from 'react-window';
import { useBoundingClientRect } from '../../../utils/useBoundingClientRect';

export type DataGridBaseProps = {
    data: any;
    children: (props: any) => JSX.Element;
    height?: number;
    mode?: 'grid' | 'rows';
    itemWidth?: number;
    itemHeight?: number;
    emptyMessage?: string;
    autoHeight?: boolean;
};

export function DataGridBase(props: DataGridBaseProps) {
    const {
        mode = 'grid',
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
            <Container className='DataGridBase-container' ref={ref}>
                <Empty>{emptyMessage}</Empty>
            </Container>
        );
    }

    const DataGridBaseRow = (rowProps: any) => {
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

    function renderDataGridBase() {
        return (
            <FixedSizeList
                className='table'
                height={autoHeight ? height : props.height || 'auto'}
                itemCount={itemData.length}
                itemSize={itemHeight}
                itemData={itemData}
                width='100%'
            >
                {DataGridBaseRow}
            </FixedSizeList>
        );
    }

    return (
        <Container
            className='DataGridBase-container'
            data-testid='DataGridBase-container'
            ref={ref}
        >
            {renderDataGridBase()}
        </Container>
    );
}

export default DataGridBase;
