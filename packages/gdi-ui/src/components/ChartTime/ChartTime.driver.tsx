import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ChartTime, ChartTimeProps } from './ChartTime';
import { BaseComponentDriver } from 'testing-base';

export class ChartTimeDriver extends BaseComponentDriver {
  private props: Partial<ChartTimeProps> = {};

  constructor() {
    super('ChartTime');
  }

  when: any = {
    rendered: () => {
      render(<ChartTime {...(this.props as ChartTimeProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ChartTime {...(this.props as ChartTimeProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ChartTimeProps>) => {
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
