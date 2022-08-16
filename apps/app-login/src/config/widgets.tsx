import React from 'react';
import { LoginContainer } from '../containers/LoginContainer';

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
        component: (props: any) => <LoginContainer {...props} />,
    },
];
