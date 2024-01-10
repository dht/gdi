import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Auto, AutoProps } from './Auto';
import { BaseComponentDriver } from 'testing-base';

export class AutoDriver extends BaseComponentDriver {
  private props: Partial<AutoProps> = {};

  constructor() {
    super('Auto');
  }

  when: any = {
    rendered: () => {
      render(<Auto {...(this.props as AutoProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Auto {...(this.props as AutoProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<AutoProps>) => {
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
