import React from 'react';
import { Wrapper } from './Knowledge.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';

export type KnowledgeProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function Knowledge(props: KnowledgeProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('link');

    return (
        <Wrapper className='Knowledge-wrapper' data-testid='Knowledge-wrapper'>
            <Multi
                id='Knowledge'
                itemType='link'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
                customView={CustomView}
            />
        </Wrapper>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Knowledge;
