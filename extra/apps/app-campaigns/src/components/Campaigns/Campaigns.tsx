import React from 'react';
import { Container } from './Campaigns.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type CampaignsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Campaigns(props: CampaignsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('campaign');
    const { t } = useLanguage();

    return (
        <Container
            className='Campaigns-container'
            data-testid='Campaigns-container'
        >
            <Multi
                id='Campaigns'
                itemType='campaign'
                header={t('Campaigns')}
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

export default Campaigns;
