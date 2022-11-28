import React, { useContext } from 'react';
import { Container } from './Articles.style';
import { Multi } from '@gdi/web-ui';
import { useCrudDefinitions } from '@gdi/platformer';

export type ArticlesProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    tags: IOptions;
    dispatch: any;
};

export function Articles(props: ArticlesProps) {
    const { data, callbacks, allOptions, tags, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('article');

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
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
                customView={CustomView}
                tags={tags}
            />
        </Container>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Articles;
