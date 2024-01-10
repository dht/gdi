import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Babylon, BabylonProps } from './Babylon';
import { BaseComponentDriver } from 'testing-base';

export class BabylonDriver extends BaseComponentDriver {
  private props: Partial<BabylonProps> = {};

  constructor() {
    super('Babylon');
  }

  when: any = {
    rendered: () => {
      render(<Babylon {...(this.props as BabylonProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Babylon {...(this.props as BabylonProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<BabylonProps>) => {
      this.props = props;
      return this;
    },
  };

  get = {
    containerClassName: () => {
      return this.wrapper.className;
    },
    label: () => {
      return this.wrapper.innerHTML;
    },
  };
}
