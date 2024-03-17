import React from 'react';
import { render, fireList } from '@testing-library/react';
import { ListsSummary, ListsSummaryProps } from './ListsSummary';
import { BaseComponentDriver } from 'testing-base';

export class ListsSummaryDriver extends BaseComponentDriver {
  private props: Partial<ListsSummaryProps> = {};

  constructor() {
    super('ListsSummary');
  }

  when: any = {
    rendered: () => {
      render(<ListsSummary {...(this.props as ListsSummaryProps)} />);
      return this;
    },
    clicked: () => {
      fireList.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ListsSummary {...(this.props as ListsSummaryProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ListsSummaryProps>) => {
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
