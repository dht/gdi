import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EventsSummary, EventsSummaryProps } from './EventsSummary';
import { BaseComponentDriver } from 'testing-base';

export class EventsSummaryDriver extends BaseComponentDriver {
  private props: Partial<EventsSummaryProps> = {};

  constructor() {
    super('EventsSummary');
  }

  when: any = {
    rendered: () => {
      render(<EventsSummary {...(this.props as EventsSummaryProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<EventsSummary {...(this.props as EventsSummaryProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<EventsSummaryProps>) => {
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
