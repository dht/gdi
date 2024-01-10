import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LoginPage, LoginPageProps } from './LoginPage';
import { BaseComponentDriver } from 'testing-base';

export class LoginPageDriver extends BaseComponentDriver {
  private props: Partial<LoginPageProps> = {};

  constructor() {
    super('LoginPage');
  }

  when: any = {
    rendered: () => {
      render(<LoginPage {...(this.props as LoginPageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<LoginPage {...(this.props as LoginPageProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<LoginPageProps>) => {
      this.props = props;
      return this;
    },
  };

  get = {
    WrapperClassName: () => {
      return this.wrapper.className;
    },
    label: () => {
      return this.wrapper.innerHTML;
    },
  };
}
