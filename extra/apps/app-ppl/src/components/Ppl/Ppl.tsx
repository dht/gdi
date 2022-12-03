import React, { useContext } from 'react';
import { Wrapper } from './Ppl.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type PplProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    allMethods: any;
    tags: IOptions;
    dispatch: any;
};

export function Ppl(props: PplProps) {
    const { data, callbacks, allOptions, allMethods, tags, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('person');

    return (
        <Wrapper className='Ppl-wrapper' data-testid='Ppl-wrapper'>
            <Multi
                id='Ppl'
                itemType='person'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
                allMethods={allMethods}
                customView={CustomView}
                tags={tags}
            />
        </Wrapper>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Ppl;
