import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Logger, LoggerProps } from './Logger';
import { BaseComponentDriver } from 'testing-base';

export class LoggerDriver extends BaseComponentDriver {
  private props: Partial<LoggerProps> = {};

  constructor() {
    super('Logger');
  }

  when: any = {
    rendered: () => {
      render(<Logger {...(this.props as LoggerProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Logger {...(this.props as LoggerProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<LoggerProps>) => {
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
