import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Status, StatusProps } from './Status';
import { BaseComponentDriver } from 'testing-base';

export class StatusDriver extends BaseComponentDriver {
  private props: Partial<StatusProps> = {};

  constructor() {
    super('Status');
  }

  when: any = {
    rendered: () => {
      render(<Status {...(this.props as StatusProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Status {...(this.props as StatusProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<StatusProps>) => {
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
