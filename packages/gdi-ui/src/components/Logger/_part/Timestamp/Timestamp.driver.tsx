import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Timestamp, TimestampProps } from './Timestamp';
import { BaseComponentDriver } from 'testing-base';

export class TimestampDriver extends BaseComponentDriver {
  private props: Partial<TimestampProps> = {};

  constructor() {
    super('Timestamp');
  }

  when: any = {
    rendered: () => {
      render(<Timestamp {...(this.props as TimestampProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Timestamp {...(this.props as TimestampProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TimestampProps>) => {
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
