import React from 'react';
import { Wrapper, LogoWrapper, Panel } from './Login.style';
import { useMount } from 'react-use';
import { firebase } from '@gdi/platformer';
import { Logo } from '@gdi/web-ui';

export type LoginProps = {};

export function Login(props: LoginProps) {
    useMount(() => {
        firebase.initUI('#firebaseui-auth-wrapper');
    });

    return (
        <Wrapper className='Login-wrapper' data-testid='Login-wrapper'>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <Panel id='firebaseui-auth-wrapper' />
        </Wrapper>
    );
}

export default Login;
