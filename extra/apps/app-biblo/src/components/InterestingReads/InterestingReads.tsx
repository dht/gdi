import React from 'react';
import { Container } from './InterestingReads.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type InterestingReadsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function InterestingReads(props: InterestingReadsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('link');
    const { t } = useLanguage();

    return (
        <Container
            className='InterestingReads-container'
            data-testid='InterestingReads-container'
        >
            <Multi
                id='InterestingReads'
                itemType='link'
                header={t('Interesting Reads')}
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

export default InterestingReads;
