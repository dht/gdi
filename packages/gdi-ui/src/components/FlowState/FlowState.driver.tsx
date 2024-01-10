import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FlowState, FlowStateProps } from './FlowState';
import { BaseComponentDriver } from 'testing-base';

export class FlowStateDriver extends BaseComponentDriver {
  private props: Partial<FlowStateProps> = {};

  constructor() {
    super('FlowState');
  }

  when: any = {
    rendered: () => {
      render(<FlowState {...(this.props as FlowStateProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<FlowState {...(this.props as FlowStateProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<FlowStateProps>) => {
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
