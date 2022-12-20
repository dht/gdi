import React from 'react';
import { Wrapper } from './Coupons.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type CouponsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function Coupons(props: CouponsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('article');
    const { t } = useLanguage();

    return (
        <Wrapper className='Coupons-wrapper' data-testid='Coupons-wrapper'>
            <Multi
                id='Coupons'
                itemType='article'
                header={t('Coupons')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Wrapper>
    );
}

export default Coupons;
