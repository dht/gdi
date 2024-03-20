import React from 'react';
import { render, fireListItem } from '@testing-library/react';
import { ListItemsSummary, ListItemsSummaryProps } from './ListItemsSummary';
import { BaseComponentDriver } from 'testing-base';

export class ListItemsSummaryDriver extends BaseComponentDriver {
  private props: Partial<ListItemsSummaryProps> = {};

  constructor() {
    super('ListItemsSummary');
  }

  when: any = {
    rendered: () => {
      render(<ListItemsSummary {...(this.props as ListItemsSummaryProps)} />);
      return this;
    },
    clicked: () => {
      fireListItem.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ListItemsSummary {...(this.props as ListItemsSummaryProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ListItemsSummaryProps>) => {
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
