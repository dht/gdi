import React from 'react';
import bytes from 'bytes';
import { Container, Pair, Label, Value } from './ImportExportSummary.style';

export type ImportExportSummaryProps = {
    totalSize: number;
    count: number;
};

export function ImportExportSummary(props: ImportExportSummaryProps) {
    const { totalSize, count } = props;

    return (
        <Container
            className='ImportExportSummary-container'
            data-testid='ImportExportSummary-container'
        >
            <Pair>
                <Label>Total size</Label>
                <Value>{bytes(totalSize)}</Value>
            </Pair>
            <Pair>
                <Label>Items</Label>
                <Value>{count}</Value>
            </Pair>
        </Container>
    );
}

export default ImportExportSummary;
