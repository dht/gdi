import React from 'react';
import { Wrapper } from './Orders.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type OrdersProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function Orders(props: OrdersProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('order');
    const { t } = useLanguage();

    return (
        <Wrapper className='Orders-wrapper' data-testid='Orders-wrapper'>
            <Multi
                id='Orders'
                itemType='order'
                header={t('Orders')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Wrapper>
    );
}

export default Orders;
