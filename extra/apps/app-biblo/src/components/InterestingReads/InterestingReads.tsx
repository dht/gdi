import React from 'react';
import { Container } from './InterestingReads.style';
import { Multi } from '@gdi/web-ui';
import { useCrudDefinitions } from '@gdi/platformer';

export type InterestingReadsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: any;
};

export function InterestingReads(props: InterestingReadsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('link');

    return (
        <Container
            className='InterestingReads-container'
            data-testid='InterestingReads-container'
        >
            <Multi
                id='InterestingReads'
                itemType='link'
                data={data}
                callbacks={callbacks as any}
                definitions={crudDefinitions as any}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Container>
    );
}

export default InterestingReads;
