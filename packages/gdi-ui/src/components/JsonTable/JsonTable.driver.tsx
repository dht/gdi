import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { JsonTable, JsonTableProps } from './JsonTable';
import { BaseComponentDriver } from 'testing-base';

export class JsonTableDriver extends BaseComponentDriver {
  private props: Partial<JsonTableProps> = {};

  constructor() {
    super('JsonTable');
  }

  when: any = {
    rendered: () => {
      render(<JsonTable {...(this.props as JsonTableProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<JsonTable {...(this.props as JsonTableProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<JsonTableProps>) => {
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
