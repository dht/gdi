import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TimelineCursor, TimelineCursorProps } from './TimelineCursor';
import { BaseComponentDriver } from 'testing-base';

export class TimelineCursorDriver extends BaseComponentDriver {
  private props: Partial<TimelineCursorProps> = {};

  constructor() {
    super('TimelineCursor');
  }

  when: any = {
    rendered: () => {
      render(<TimelineCursor {...(this.props as TimelineCursorProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<TimelineCursor {...(this.props as TimelineCursorProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TimelineCursorProps>) => {
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
