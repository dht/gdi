import React, { useRef, useState } from 'react';
import { Container, Row } from './Logs.style';
import { FixedSizeList as List } from 'react-window';
import { useMount } from 'react-use';

export type LogsProps = {
    items: Json[];
    renderRow: (item: Json) => JSX.Element;
    itemHeight?: number;
};

type RowProps = {
    index: number;
    style: React.CSSProperties;
    data: Json[];
};

export function Logs(props: LogsProps) {
    const { items, itemHeight = 35 } = props;
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useMount(() => {
        if (!ref.current) {
            return;
        }

        const boundingBox = ref.current.getBoundingClientRect();
        setWidth(boundingBox.width);
        setHeight(boundingBox.height);
    });

    const SingleRow = (rowProps: RowProps) => {
        const { data, index, style } = rowProps;

        const itemData = data[index];

        return (
            <Row style={style} index={index}>
                {props.renderRow(itemData)}
            </Row>
        );
    };

    return (
        <Container
            className='Logs-container'
            data-testid='Logs-container'
            ref={ref}
        >
            <List
                height={height}
                itemCount={items.length}
                itemSize={itemHeight}
                width={width}
                itemData={items}
            >
                {SingleRow}
            </List>
        </Container>
    );
}

export default Logs;
