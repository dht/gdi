import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Flow, FlowProps } from './Flow';
import { BaseComponentDriver } from 'testing-base';

export class FlowDriver extends BaseComponentDriver {
  private props: Partial<FlowProps> = {};

  constructor() {
    super('Flow');
  }

  when: any = {
    rendered: () => {
      render(<Flow {...(this.props as FlowProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Flow {...(this.props as FlowProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<FlowProps>) => {
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
