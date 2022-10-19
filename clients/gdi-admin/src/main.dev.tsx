import React, { useContext, useEffect } from 'react';
import { Multi, Form, Theme, Prompt, PieMenu } from '@gdi/web-ui';
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

                <div>
                    <PieMenu
                        items={items}
                        onSelect={(item: IOption) => {
                            console.log(item);
                        }}
                    />
                </div>
            </>
        </Theme>
    );
}

export const items: IOption[] = [
    {
        id: '1',
        iconName: 'AutoEnhanceOn',
        text: 'new Sale',
        shortKey: {
            key: 's',
        },
    },
    {
        id: '2',
        iconName: 'LightningBolt',
        text: 'add sale Action',
        shortKey: {
            key: 'a',
        },
    },

    {
        id: '3',
        iconName: 'Mail',
        text: 'Email',
        shortKey: {
            key: 'e',
        },
    },
    {
        id: '4',
        iconName: 'Phone',
        text: 'Call',
        shortKey: {
            key: 'c',
        },
    },
    {
        id: '5',
        iconName: 'TaskLogo',
        text: 'add Ticket',
        shortKey: {
            key: 't',
        },
    },
    {
        id: '6',
        iconName: 'OfficeChat',
        text: 'send Whatsapp',
        shortKey: {
            key: 'w',
        },
    },
    {
        id: '7',
        iconName: 'EditNote',
        text: 'add Note',
        shortKey: {
            key: 'n',
        },
    },
];
