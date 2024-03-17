import React from 'react';
import { render, fireRead } from '@testing-library/react';
import { ReadsSummary, ReadsSummaryProps } from './ReadsSummary';
import { BaseComponentDriver } from 'testing-base';

export class ReadsSummaryDriver extends BaseComponentDriver {
  private props: Partial<ReadsSummaryProps> = {};

  constructor() {
    super('ReadsSummary');
  }

  when: any = {
    rendered: () => {
      render(<ReadsSummary {...(this.props as ReadsSummaryProps)} />);
      return this;
    },
    clicked: () => {
      fireRead.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ReadsSummary {...(this.props as ReadsSummaryProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ReadsSummaryProps>) => {
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
