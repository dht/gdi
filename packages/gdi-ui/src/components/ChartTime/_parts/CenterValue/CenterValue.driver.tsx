import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CenterValue, CenterValueProps } from './CenterValue';
import { BaseComponentDriver } from 'testing-base';

export class CenterValueDriver extends BaseComponentDriver {
  private props: Partial<CenterValueProps> = {};

  constructor() {
    super('CenterValue');
  }

  when: any = {
    rendered: () => {
      render(<CenterValue {...(this.props as CenterValueProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<CenterValue {...(this.props as CenterValueProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<CenterValueProps>) => {
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
