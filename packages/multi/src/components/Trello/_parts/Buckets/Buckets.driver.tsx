import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Buckets, BucketsProps } from './Buckets';
import { BaseComponentDriver } from 'testing-base';

export class BucketsDriver extends BaseComponentDriver {
  private props: Partial<BucketsProps> = {};

  constructor() {
    super('Buckets');
  }

  when: any = {
    rendered: () => {
      render(<Buckets {...(this.props as BucketsProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Buckets {...(this.props as BucketsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<BucketsProps>) => {
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
