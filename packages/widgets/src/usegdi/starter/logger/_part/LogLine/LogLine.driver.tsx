import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LogLine, LogLineProps } from './LogLine';
import { BaseComponentDriver } from 'testing-base';

export class LogLineDriver extends BaseComponentDriver {
  private props: Partial<LogLineProps> = {};

  constructor() {
    super('LogLine');
  }

  when: any = {
    rendered: () => {
      render(<LogLine {...(this.props as LogLineProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<LogLine {...(this.props as LogLineProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<LogLineProps>) => {
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
