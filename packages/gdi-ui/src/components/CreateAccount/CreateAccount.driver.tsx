import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CreateAccount, CreateAccountProps } from './CreateAccount';
import { BaseComponentDriver } from 'testing-base';

export class CreateAccountDriver extends BaseComponentDriver {
  private props: Partial<CreateAccountProps> = {};

  constructor() {
    super('CreateAccount');
  }

  when: any = {
    rendered: () => {
      render(<CreateAccount {...(this.props as CreateAccountProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<CreateAccount {...(this.props as CreateAccountProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<CreateAccountProps>) => {
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
