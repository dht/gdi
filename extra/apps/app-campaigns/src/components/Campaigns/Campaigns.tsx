import React from 'react';
import { Container } from './Campaigns.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';

export type CampaignsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: any;
};

export function Campaigns(props: CampaignsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('campaign');

    return (
        <Container
            className='Campaigns-container'
            data-testid='Campaigns-container'
        >
            <Multi
                id='Campaigns'
                itemType='campaign'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Container>
    );
}

export default Campaigns;
