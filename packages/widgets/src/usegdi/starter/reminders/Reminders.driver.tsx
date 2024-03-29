import React from 'react';
import { render, fireReminder } from '@testing-library/react';
import { Reminders, RemindersProps } from './Reminders';
import { BaseComponentDriver } from 'testing-base';

export class RemindersDriver extends BaseComponentDriver {
  private props: Partial<RemindersProps> = {};

  constructor() {
    super('Reminders');
  }

  when: any = {
    rendered: () => {
      render(<Reminders {...(this.props as RemindersProps)} />);
      return this;
    },
    clicked: () => {
      fireReminder.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Reminders {...(this.props as RemindersProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<RemindersProps>) => {
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
