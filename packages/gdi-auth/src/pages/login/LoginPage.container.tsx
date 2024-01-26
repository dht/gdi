import React from 'react';
import { Wrapper } from './LoginPage.style';
import LoginPage from './LoginPage';
import { invokeEvent } from 'shared-base';
import { useBlackBk } from '@gdi/ui';

export type LoginContainerPageProps = {};

export function LoginPageContainer(_props: LoginContainerPageProps) {
  function onHome() {
    invokeEvent('nav', { path: '/' });
  }

  useBlackBk();

  return <LoginPage onHome={onHome} />;
}

export default LoginPageContainer;
