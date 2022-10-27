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

export const items: IOption[] = [
    {
        id: 'newSale',
        iconName: 'AutoEnhanceOn',
        text: 'new Sale',
        shortKey: {
            key: 's',
        },
    },
    {
        id: 'newSaleAction',
        iconName: 'LightningBolt',
        text: 'add sale Action',
        shortKey: {
            key: 'a',
        },
    },

    {
        id: 'mail',
        iconName: 'Mail',
        text: 'Email',
        shortKey: {
            key: 'e',
        },
    },
    {
        id: 'phone',
        iconName: 'Phone',
        text: 'Call',
        shortKey: {
            key: 'c',
        },
    },
    {
        id: 'newTicket',
        iconName: 'TaskLogo',
        text: 'add Ticket',
        shortKey: {
            key: 't',
        },
    },
    {
        id: 'whatsapp',
        iconName: 'OfficeChat',
        text: 'send Whatsapp',
        shortKey: {
            key: 'w',
        },
    },
    {
        id: 'editNote',
        iconName: 'EditNote',
        text: 'add Note',
        shortKey: {
            key: 'n',
        },
    },
];
