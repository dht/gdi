import React, { useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { useMount } from 'react-use';
import {
    Wrapper,
    Column,
    Data,
    Title,
    Item,
    Row,
    Sequence,
    Timestamp,
    Status,
    Dot,
} from './Logs.style';
import classnames from 'classnames';

type LogItem = Json & {
    id: string;
    timestamp: string;
    timestampText: string;
    eventId: string;
};

export type LogsProps = {
    items: LogItem[];
    flavour?: 'small' | 'large';
    showData?: boolean;
    showStatus?: boolean;
};

type RowProps = {
    index: number;
    style: React.CSSProperties;
    data: Json[];
};

export function Logs(props: LogsProps) {
    const { items, flavour = 'small', showStatus, showData } = props;
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const itemHeight = flavour === 'small' ? 34 : 50;

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

        const {
            id,
            timestamp,
            timestampText,
            eventId,
            statusText,
            isRunning,
            result,
        } = itemData;

        const dataWithoutMeta: Json = { ...itemData };
        delete dataWithoutMeta['id'];
        delete dataWithoutMeta['timestamp'];
        delete dataWithoutMeta['timestampText'];
        delete dataWithoutMeta['eventId'];
        delete dataWithoutMeta['isRunning'];

        function renderStatus() {
            const className = classnames(result, {
                running: isRunning,
            });

            return (
                <Status>
                    {statusText}
                    <Dot className={className} />
                </Status>
            );
        }

        function renderData() {
            return (
                <Data
                    className='data'
                    onClick={() =>
                        console.log(JSON.stringify(dataWithoutMeta, null, 4))
                    }
                >
                    {JSON.stringify(dataWithoutMeta)}
                </Data>
            );
        }

        return (
            <Item
                style={style}
                index={index}
                key={itemData.id}
                className='event'
            >
                <Column width={60}>
                    <Sequence className='sequence'>{id}</Sequence>
                </Column>
                <Column>
                    <Row>
                        <Title className='title'>{eventId}</Title>
                        <Timestamp
                            className='timestamp'
                            title={new Date(timestamp || 0).toString()}
                        >
                            {timestampText}
                        </Timestamp>
                    </Row>
                    <Row>
                        {showData && renderData()}
                        {showStatus && renderStatus()}
                    </Row>
                </Column>
            </Item>
        );
    };

    const className = classnames('Logs-wrapper', flavour);

    const Cmp: any = List;

    return (
        <Wrapper className={className} data-testid='Logs-wrapper' ref={ref}>
            <Cmp
                height={height}
                itemCount={items.length}
                itemSize={itemHeight}
                width={width}
                itemData={items}
            >
                {SingleRow}
            </Cmp>
        </Wrapper>
    );
}

export default Logs;
