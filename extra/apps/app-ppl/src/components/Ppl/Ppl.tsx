import React, { useContext } from 'react';
import { Container } from './Ppl.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type PplProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    allMethods: any;
    tags: IOptions;
    dispatch: Dispatch;
};

export function Ppl(props: PplProps) {
    const { data, callbacks, allOptions, allMethods, tags, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('person');

    return (
        <Container className='Ppl-container' data-testid='Ppl-container'>
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
        </Container>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Ppl;
