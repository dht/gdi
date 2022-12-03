import React from 'react';
import { Wrapper } from './Comments.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';

export type CommentsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function Comments(props: CommentsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('comment');

    return (
        <Wrapper className='Comments-wrapper' data-testid='Comments-wrapper'>
            <Multi
                id='Comments'
                itemType='comment'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Wrapper>
    );
}

export default Comments;
