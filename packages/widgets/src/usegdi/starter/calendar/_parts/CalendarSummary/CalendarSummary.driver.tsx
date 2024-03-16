import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CalendarSummary, CalendarSummaryProps } from './CalendarSummary';
import { BaseComponentDriver } from 'testing-base';

export class CalendarSummaryDriver extends BaseComponentDriver {
  private props: Partial<CalendarSummaryProps> = {};

  constructor() {
    super('CalendarSummary');
  }

  when: any = {
    rendered: () => {
      render(<CalendarSummary {...(this.props as CalendarSummaryProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<CalendarSummary {...(this.props as CalendarSummaryProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<CalendarSummaryProps>) => {
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
