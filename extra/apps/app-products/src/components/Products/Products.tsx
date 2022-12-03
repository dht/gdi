import React from 'react';
import { Wrapper } from './Products.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type ProductsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function Products(props: ProductsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('product');
    const { t } = useLanguage();

    return (
        <Wrapper className='Products-wrapper' data-testid='Products-wrapper'>
            <Multi
                id='Products'
                itemType='product'
                header={t('Products')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Wrapper>
    );
}

export default Products;
