import React, { useContext, useEffect } from 'react';
import { Prompt } from '@gdi/web-base-ui';
import { Multi, Form, Theme } from '@gdi/web-ui';
import { Catalog } from '@gdi/language';
import styled from 'styled-components';
export function Dev() {
    const dispatch = (action: any) => {
        console.log('action ->', action);
    };

    return (
        <Theme>
            <>
                <Catalog />
                <Prompt formComponent={Form} />
            </>
        </Theme>
    );
}
