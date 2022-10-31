import React, { useContext } from 'react';
import { Container } from './Articles.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type ArticlesProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Articles(props: ArticlesProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('article');
    const { t } = useLanguage();

    return (
        <Container
            className='Articles-container'
            data-testid='Articles-container'
        >
            <Multi
                id='Articles'
                itemType='article'
                header={t('Articles')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                viewModes={['gallery', 'table', 'spreadsheet']}
                dispatch={dispatch}
                allOptions={allOptions}
                customView={CustomView}
            />
        </Container>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Articles;
