import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Mode, ModeProps } from './Mode';
import { BaseComponentDriver } from 'testing-base';

export class ModeDriver extends BaseComponentDriver {
  private props: Partial<ModeProps> = {};

  constructor() {
    super('Mode');
  }

  when: any = {
    rendered: () => {
      render(<Mode {...(this.props as ModeProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Mode {...(this.props as ModeProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ModeProps>) => {
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
