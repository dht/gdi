import React from 'react';
import { Container } from './Articles.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';

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

    return (
        <Container
            className='Articles-container'
            data-testid='Articles-container'
        >
            <Multi
                id='Articles'
                itemType='article'
                data={data}
                callbacks={callbacks}
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
