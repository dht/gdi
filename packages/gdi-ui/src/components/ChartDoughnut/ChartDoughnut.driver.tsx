import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ChartDoughnut, ChartDoughnutProps } from './ChartDoughnut';
import { BaseComponentDriver } from 'testing-base';

export class ChartDoughnutDriver extends BaseComponentDriver {
  private props: Partial<ChartDoughnutProps> = {};

  constructor() {
    super('ChartDoughnut');
  }

  when: any = {
    rendered: () => {
      render(<ChartDoughnut {...(this.props as ChartDoughnutProps)} />);
      return this;
    },
    click: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
  };

  given: any = {
    props: (props: Partial<ChartDoughnutProps>) => {
      this.props = props;
      return this;
    },
  };

  get = {
    containerClassName: () => {
      return this.wrapper.className;
    },
  };
}
