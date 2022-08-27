import React from 'react';
import { Container, LogoWrapper, Panel } from './Login.style';
import { useMount } from 'react-use';
import { firebase } from '@gdi/platformer';
import { Logo } from '@gdi/web-ui';

import 'firebaseui/dist/firebaseui.css';

export type LoginProps = {};

export function Login(props: LoginProps) {
    useMount(() => {
        firebase.initUI('#firebaseui-auth-container');
    });

    return (
        <Container className='Login-container' data-testid='Login-container'>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <Panel id='firebaseui-auth-container' />
        </Container>
    );
}

export default Login;
