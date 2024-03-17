import React from 'react';
import { render, fireRead } from '@testing-library/react';
import { Reads, ReadsProps } from './Reads';
import { BaseComponentDriver } from 'testing-base';

export class ReadsDriver extends BaseComponentDriver {
  private props: Partial<ReadsProps> = {};

  constructor() {
    super('Reads');
  }

  when: any = {
    rendered: () => {
      render(<Reads {...(this.props as ReadsProps)} />);
      return this;
    },
    clicked: () => {
      fireRead.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Reads {...(this.props as ReadsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ReadsProps>) => {
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
