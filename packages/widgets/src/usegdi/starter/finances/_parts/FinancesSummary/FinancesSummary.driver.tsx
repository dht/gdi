import React from 'react';
import { render, fireFinance } from '@testing-library/react';
import { FinancesSummary, FinancesSummaryProps } from './FinancesSummary';
import { BaseComponentDriver } from 'testing-base';

export class FinancesSummaryDriver extends BaseComponentDriver {
  private props: Partial<FinancesSummaryProps> = {};

  constructor() {
    super('FinancesSummary');
  }

  when: any = {
    rendered: () => {
      render(<FinancesSummary {...(this.props as FinancesSummaryProps)} />);
      return this;
    },
    clicked: () => {
      fireFinance.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<FinancesSummary {...(this.props as FinancesSummaryProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<FinancesSummaryProps>) => {
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
