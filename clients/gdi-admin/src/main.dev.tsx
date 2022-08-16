import React from 'react';
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
                    data={Object.values({})}
                    dispatch={dispatch}
                />
                <Prompt formComponent={Form} />
            </>
        </Theme>
    );
}
