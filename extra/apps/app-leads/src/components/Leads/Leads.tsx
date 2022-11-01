import React from 'react';
import { Container } from './Leads.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type LeadsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Leads(props: LeadsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('lead');
    const { t } = useLanguage();

    return (
        <Container className='Leads-container' data-testid='Leads-container'>
            <Multi
                id='Leads'
                itemType='lead'
                header={t('Leads')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Container>
    );
}

export default Leads;
