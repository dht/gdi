import React from 'react';
import { LoginContainer } from '../containers/LoginContainer';
import { APP_ID } from './ids';
import { IWidget, Wrapper } from '@gdi/platformer';

export enum LoginWidgets {
    Login = 'login.Login',
}
export const widgets: IWidget[] = [
    {
        id: LoginWidgets.Login,
        name: 'Login',
        description: 'Login',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={LoginContainer} props={props} />
        ),
    },
];
