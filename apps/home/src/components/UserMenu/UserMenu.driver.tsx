import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UserMenu, UserMenuProps } from './UserMenu';
import { BaseComponentDriver } from 'testing-base';

export class UserMenuDriver extends BaseComponentDriver {
  private props: Partial<UserMenuProps> = {};

  constructor() {
    super('UserMenu');
  }

  when: any = {
    rendered: () => {
      render(<UserMenu {...(this.props as UserMenuProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<UserMenu {...(this.props as UserMenuProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<UserMenuProps>) => {
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
