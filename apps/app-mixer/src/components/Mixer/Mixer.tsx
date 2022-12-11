import React, { useMemo } from 'react';
import { Wrapper } from './Mixer.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';

export type MixerProps = {
    header: string;
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
    customView?: React.FC<any>;
    customView2?: React.FC<any>;
};

export function Mixer(props: MixerProps) {
    const { data, callbacks, allOptions, dispatch, customView, customView2 } =
        props;

    const crudDefinitions = useCrudDefinitions('pageInstance');

    return (
        <Wrapper className='Mixer-wrapper' data-testid='Mixer-wrapper'>
            <Multi
                id='PageInstances'
                itemType='pageInstance'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
                customView={customView}
                customView2={customView2}
            />
        </Wrapper>
    );
}

export default Mixer;
