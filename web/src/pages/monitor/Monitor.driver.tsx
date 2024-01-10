import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Monitor, MonitorProps } from './Monitor';
import { BaseComponentDriver } from 'testing-base';

export class MonitorDriver extends BaseComponentDriver {
  private props: Partial<MonitorProps> = {};

  constructor() {
    super('Monitor');
  }

  when: any = {
    rendered: () => {
      render(<Monitor {...(this.props as MonitorProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Monitor {...(this.props as MonitorProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<MonitorProps>) => {
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
