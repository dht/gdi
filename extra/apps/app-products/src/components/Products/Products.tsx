import React from 'react';
import { Container } from './Products.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type ProductsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Products(props: ProductsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('product');
    const { t } = useLanguage();

    return (
        <Container
            className='Products-container'
            data-testid='Products-container'
        >
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
        </Container>
    );
}

export default Products;
