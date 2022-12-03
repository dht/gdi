import React from 'react';
import { Wrapper } from './Carts.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';

export type CartsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function Carts(props: CartsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('cart');

    return (
        <Wrapper className='Carts-wrapper' data-testid='Carts-wrapper'>
            <Multi
                id='Carts'
                itemType='cart'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Wrapper>
    );
}

export default Carts;
