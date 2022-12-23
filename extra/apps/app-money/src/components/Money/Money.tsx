import React from 'react';
import { Multi } from '@gdi/web-ui';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';
import { Wrapper } from './Money.style';

export type MoneyProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    customView: React.FC<any>;
    dispatch: any;
};

export function Money(props: MoneyProps) {
    const { data, callbacks, allOptions, customView, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('money');
    const { t } = useLanguage();

    return (
        <Wrapper className='Money-wrapper' data-testid='Money-wrapper'>
            <Multi
                id='Money'
                header={t('Money')}
                itemType='money'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
                customView={customView}
            />
        </Wrapper>
    );
}

export default Money;
