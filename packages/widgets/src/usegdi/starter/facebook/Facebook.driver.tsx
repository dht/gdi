import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Facebook, FacebookProps } from './Facebook';
import { BaseComponentDriver } from 'testing-base';

export class FacebookDriver extends BaseComponentDriver {
  private props: Partial<FacebookProps> = {};

  constructor() {
    super('Facebook');
  }

  when: any = {
    rendered: () => {
      render(<Facebook {...(this.props as FacebookProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Facebook {...(this.props as FacebookProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<FacebookProps>) => {
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
