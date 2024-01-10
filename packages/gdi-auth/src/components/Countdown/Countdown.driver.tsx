import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Countdown, CountdownProps } from './Countdown';
import { BaseComponentDriver } from 'testing-base';

export class CountdownDriver extends BaseComponentDriver {
  private props: Partial<CountdownProps> = {};

  constructor() {
    super('Countdown');
  }

  when: any = {
    rendered: () => {
      render(<Countdown {...(this.props as CountdownProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Countdown {...(this.props as CountdownProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<CountdownProps>) => {
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
