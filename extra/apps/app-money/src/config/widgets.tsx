import React from 'react';

import { OnionContainer } from '../containers/OnionContainer';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const MoneyContainer = React.lazy(() => import('../containers/MoneyContainer')); // prettier-ignore

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
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={MoneyContainer} props={props} />
        ),
    },
];
