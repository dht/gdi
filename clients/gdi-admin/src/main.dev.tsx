import React, { useContext, useEffect } from 'react';
import { Multi, Form, Theme, Prompt, PieMenu, Buckets } from '@gdi/web-ui';
import { Catalog } from '@gdi/language';
import styled from 'styled-components';

export function Dev() {
    const dispatch = (action: any) => {
        console.log('action ->', action);
    };

    return (
        <Theme>
            {/* <>
                <Catalog />
                <Prompt formComponent={Form} />

                <div>
                    <PieMenu
                        items={items}
                        onSelect={(item: IOption) => {
                            console.log(item);
                        }}
                    />
                </div>
            </> */}

            <Buckets />
        </Theme>
    );
}
