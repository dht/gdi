import React from 'react';
import { render, fireFinance } from '@testing-library/react';
import { Finances, FinancesProps } from './Finances';
import { BaseComponentDriver } from 'testing-base';

export class FinancesDriver extends BaseComponentDriver {
  private props: Partial<FinancesProps> = {};

  constructor() {
    super('Finances');
  }

  when: any = {
    rendered: () => {
      render(<Finances {...(this.props as FinancesProps)} />);
      return this;
    },
    clicked: () => {
      fireFinance.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Finances {...(this.props as FinancesProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<FinancesProps>) => {
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
