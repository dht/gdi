import React from 'react';
import { Wrapper } from './InterestingReads.style';
import { Multi } from '@gdi/web-ui';
import { useCrudDefinitions } from '@gdi/platformer';

export type InterestingReadsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function InterestingReads(props: InterestingReadsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('link');

    return (
        <Wrapper
            className='InterestingReads-wrapper'
            data-testid='InterestingReads-wrapper'
        >
            <Multi
                id='InterestingReads'
                itemType='link'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Wrapper>
    );
}

export default InterestingReads;
