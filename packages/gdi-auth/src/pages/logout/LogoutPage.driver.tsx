import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LogoutPage, LogoutPageProps } from './LogoutPage';
import { BaseComponentDriver } from 'testing-base';

export class LogoutPageDriver extends BaseComponentDriver {
  private props: Partial<LogoutPageProps> = {};

  constructor() {
    super('LogoutPage');
  }

  when: any = {
    rendered: () => {
      render(<LogoutPage {...(this.props as LogoutPageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<LogoutPage {...(this.props as LogoutPageProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<LogoutPageProps>) => {
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
