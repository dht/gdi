import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Pinterest, PinterestProps } from './Pinterest';
import { BaseComponentDriver } from 'testing-base';

export class PinterestDriver extends BaseComponentDriver {
  private props: Partial<PinterestProps> = {};

  constructor() {
    super('Pinterest');
  }

  when: any = {
    rendered: () => {
      render(<Pinterest {...(this.props as PinterestProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Pinterest {...(this.props as PinterestProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<PinterestProps>) => {
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
