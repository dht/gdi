import React from 'react';
import { Wrapper } from './LoginPage.style';
import LoginPage from './LoginPage';
import { invokeEvent } from 'shared-base';

export type LoginContainerPageProps = {};

export function LoginPageContainer(_props: LoginContainerPageProps) {
  function onHome() {
    invokeEvent('nav', { path: '/' });
  }

  return <LoginPage onHome={onHome} />;
}

export default LoginPageContainer;
