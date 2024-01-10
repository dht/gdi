import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TimeBudget, TimeBudgetProps } from './TimeBudget';
import { BaseComponentDriver } from 'testing-base';

export class TimeBudgetDriver extends BaseComponentDriver {
  private props: Partial<TimeBudgetProps> = {};

  constructor() {
    super('TimeBudget');
  }

  when: any = {
    rendered: () => {
      render(<TimeBudget {...(this.props as TimeBudgetProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<TimeBudget {...(this.props as TimeBudgetProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TimeBudgetProps>) => {
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
