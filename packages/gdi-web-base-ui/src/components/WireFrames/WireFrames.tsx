import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    Wrapper,
    Table,
    TableHeader,
    TableRow,
    Th,
    Td,
} from './WireFrames.style';

export type WireFramesProps = {
    type: 'graph' | 'stats' | 'table' | 'details' | 'form';
};

export function WireFrames(props: WireFramesProps) {
    const { type } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [rows, setRows] = useState(10);
    const [cols, setCols] = useState(10);

    useEffect(() => {
        if (ref.current) {
            const { width, height } = ref.current.getBoundingClientRect();
            setRows(Math.round((height - 40) / 31));
            setCols(Math.round((width - 40) / 150));
        }
    }, []);

    function renderInner() {
        switch (type) {
            case 'table':
                return <WireFramesTable rows={rows} cols={cols} />;
            case 'graph':
                return <div>this is an awesome graph</div>;
            default:
                return null;
        }
    }

    return (
        <Wrapper
            ref={ref}
            className='WireFrames-wrapper'
            data-testid='WireFrames-wrapper'
        >
            {renderInner()}
        </Wrapper>
    );
}

function WireFramesTable(props: any) {
    const { rows, cols } = props;
    const colsArray = useMemo(() => [...new Array(cols)], [cols]);
    const rowsArray = useMemo(() => [...new Array(rows)], [rows]);

    const flex = useMemo(() => {
        return colsArray.map(() => rnd(1, 4));
    }, [cols]);

    return (
        <Table>
            <TableHeader>
                {colsArray.map((_i, index) => (
                    <Th key={`col_${index}`} flex={flex[index]} />
                ))}
            </TableHeader>
            {rowsArray.map((_i, rowIndex) => (
                <TableRow key={`row_${rowIndex}`}>
                    {colsArray.map((_i, index) => (
                        <Td key={`col_${index}`} flex={flex[index]} />
                    ))}
                </TableRow>
            ))}
        </Table>
    );
}

function rnd(min: number, max: number) {
    return min + Math.round((max - min) * Math.random());
}

export default WireFrames;
