import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { BaseComponentDriver } from 'testing-base';

export class CheckboxDriver extends BaseComponentDriver {
  private props: Partial<CheckboxProps> = {};

  constructor() {
    super('Checkbox');
  }

  when: any = {
    rendered: () => {
      render(<Checkbox {...(this.props as CheckboxProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Checkbox {...(this.props as CheckboxProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<CheckboxProps>) => {
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
