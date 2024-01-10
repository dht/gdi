import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NoMobile, NoMobileProps } from './NoMobile';
import { BaseComponentDriver } from 'testing-base';

export class NoMobileDriver extends BaseComponentDriver {
  private props: Partial<NoMobileProps> = {};

  constructor() {
    super('NoMobile');
  }

  when: any = {
    rendered: () => {
      render(<NoMobile {...(this.props as NoMobileProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<NoMobile {...(this.props as NoMobileProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<NoMobileProps>) => {
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
