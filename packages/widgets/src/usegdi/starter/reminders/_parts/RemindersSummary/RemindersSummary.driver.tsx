import React from 'react';
import { render, fireReminder } from '@testing-library/react';
import { RemindersSummary, RemindersSummaryProps } from './RemindersSummary';
import { BaseComponentDriver } from 'testing-base';

export class RemindersSummaryDriver extends BaseComponentDriver {
  private props: Partial<RemindersSummaryProps> = {};

  constructor() {
    super('RemindersSummary');
  }

  when: any = {
    rendered: () => {
      render(<RemindersSummary {...(this.props as RemindersSummaryProps)} />);
      return this;
    },
    clicked: () => {
      fireReminder.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<RemindersSummary {...(this.props as RemindersSummaryProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<RemindersSummaryProps>) => {
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
