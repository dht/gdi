import React, { useContext } from 'react';
import { Wrapper } from './Articles.style';
import { Multi } from '@gdi/web-ui';
import { useCrudDefinitions } from '@gdi/platformer';

export type ArticlesProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    tags: IOptions;
    dispatch: any;
};

export function Articles(props: ArticlesProps) {
    const { data, callbacks, allOptions, tags, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('article');

    return (
        <Wrapper className='Articles-wrapper' data-testid='Articles-wrapper'>
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
        </Wrapper>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Articles;
