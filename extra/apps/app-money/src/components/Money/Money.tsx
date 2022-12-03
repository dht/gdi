import React from 'react';
import { Wrapper } from './Money.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type MoneyProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: any;
};

export function Money(props: MoneyProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('image');
    const { t } = useLanguage();

    return (
        <Wrapper className='Money-wrapper' data-testid='Money-wrapper'>
            <Multi
                id='Money'
                header={t('Money')}
                itemType='article'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
                customView={CustomView}
                viewModes={['timeline', 'calendar', 'spreadsheet']}
                hideParts={['preview']}
            />
        </Wrapper>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Money;
