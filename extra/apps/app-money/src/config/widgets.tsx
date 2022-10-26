import React from 'react';
import { IWidget } from '@gdi/platformer';
import { MoneyContainer } from '../containers/MoneyContainer';

export enum MoneyWidgets {
    Money = 'money.Money',
}
export const widgets: IWidget[] = [
    {
        id: MoneyWidgets.Money,
        name: 'Money',
        description: 'Money',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <MoneyContainer {...props} />,
    },
];
