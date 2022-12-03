import React from 'react';
import bytes from 'bytes';
import {
    Wrapper,
    Pair,
    Label,
    Value,
    P,
    Flex,
} from './ImportExportSummary.style';

export type ImportExportSummaryProps = {
    totalSize: number;
    count: number;
    showExportMessage?: boolean;
};

export function ImportExportSummary(props: ImportExportSummaryProps) {
    const { totalSize, count, showExportMessage } = props;

    return (
        <Wrapper
            className='ImportExportSummary-wrapper'
            data-testid='ImportExportSummary-wrapper'
        >
            {showExportMessage && (
                <P>
                    Note the total size is calculated for a JSON format without
                    spaces and new-lines. Actual file size is expected to be
                    larger.
                </P>
            )}
            <Flex />
            <Pair>
                <Label>Total size*</Label>
                <Value>{bytes(totalSize)}</Value>
            </Pair>
            <Pair>
                <Label>Items</Label>
                <Value>{count}</Value>
            </Pair>
        </Wrapper>
    );
}

export default ImportExportSummary;
