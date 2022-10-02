import React from 'react';
import { articles } from './data.articles';
import { Prompt } from '@gdi/web-base-ui';
import { Multi, Form, Theme } from '@gdi/web-ui';

export function Dev() {
    const dispatch = (action: any) => {
        console.log('action ->', action);
    };

    return (
        <Theme>
            <>
                <Multi
                    id=''
                    itemType='article'
                    data={Object.values(articles)}
                    dispatch={dispatch}
                />
                <Prompt formComponent={Form} />
            </>
        </Theme>
    );
}
