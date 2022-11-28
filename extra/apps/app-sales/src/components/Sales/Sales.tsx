import React from 'react';
import { Container } from './Sales.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type SalesProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: any;
};

export function Sales(props: SalesProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('sale');
    const { t } = useLanguage();

    return (
        <Container className='Sales-container' data-testid='Sales-container'>
            <Multi
                id='Sales'
                itemType='sale'
                header={t('Sales')}
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

export default Sales;
