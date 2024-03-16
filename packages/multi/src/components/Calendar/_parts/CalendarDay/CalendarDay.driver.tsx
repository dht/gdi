import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CalendarDay, CalendarDayProps } from './CalendarDay';
import { BaseComponentDriver } from 'testing-base';

export class CalendarDayDriver extends BaseComponentDriver {
  private props: Partial<CalendarDayProps> = {};

  constructor() {
    super('CalendarDay');
  }

  when: any = {
    rendered: () => {
      render(<CalendarDay {...(this.props as CalendarDayProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<CalendarDay {...(this.props as CalendarDayProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<CalendarDayProps>) => {
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
