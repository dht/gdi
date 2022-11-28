import React from 'react';
import { Container } from './Orders.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type OrdersProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: any;
};

export function Orders(props: OrdersProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('order');
    const { t } = useLanguage();

    return (
        <Container className='Orders-container' data-testid='Orders-container'>
            <Multi
                id='Orders'
                itemType='order'
                header={t('Orders')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
                hideParts={['preview']}
            />
        </Container>
    );
}

export default Orders;
