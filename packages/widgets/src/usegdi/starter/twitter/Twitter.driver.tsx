import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Twitter, TwitterProps } from './Twitter';
import { BaseComponentDriver } from 'testing-base';

export class TwitterDriver extends BaseComponentDriver {
  private props: Partial<TwitterProps> = {};

  constructor() {
    super('Twitter');
  }

  when: any = {
    rendered: () => {
      render(<Twitter {...(this.props as TwitterProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Twitter {...(this.props as TwitterProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TwitterProps>) => {
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
