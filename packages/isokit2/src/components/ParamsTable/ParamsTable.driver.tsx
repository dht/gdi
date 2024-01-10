import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ParamsTable, ParamsTableProps } from './ParamsTable';
import { BaseComponentDriver } from 'testing-base';

export class ParamsTableDriver extends BaseComponentDriver {
  private props: Partial<ParamsTableProps> = {};

  constructor() {
    super('ParamsTable');
  }

  when: any = {
    rendered: () => {
      render(<ParamsTable {...(this.props as ParamsTableProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ParamsTable {...(this.props as ParamsTableProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ParamsTableProps>) => {
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
