import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Variables, VariablesProps } from './Variables';
import { BaseComponentDriver } from 'testing-base';

export class VariablesDriver extends BaseComponentDriver {
  private props: Partial<VariablesProps> = {};

  constructor() {
    super('Variables');
  }

  when: any = {
    rendered: () => {
      render(<Variables {...(this.props as VariablesProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Variables {...(this.props as VariablesProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<VariablesProps>) => {
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
