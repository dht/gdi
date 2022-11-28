import React from 'react';
import { Container } from './Knowledge.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';

export type KnowledgeProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: any;
};

export function Knowledge(props: KnowledgeProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('link');

    return (
        <Container
            className='Knowledge-container'
            data-testid='Knowledge-container'
        >
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
        </Container>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Knowledge;
