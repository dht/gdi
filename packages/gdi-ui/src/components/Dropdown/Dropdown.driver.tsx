import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dropdown, DropdownProps } from './Dropdown';
import { BaseComponentDriver } from 'testing-base';

export class DropdownDriver extends BaseComponentDriver {
  private props: Partial<DropdownProps> = {};

  constructor() {
    super('Dropdown');
  }

  when: any = {
    rendered: () => {
      render(<Dropdown {...(this.props as DropdownProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Dropdown {...(this.props as DropdownProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<DropdownProps>) => {
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
