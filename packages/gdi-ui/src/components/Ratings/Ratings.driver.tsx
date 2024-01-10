import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Ratings, RatingsProps } from './Ratings';
import { BaseComponentDriver } from 'testing-base';

export class RatingsDriver extends BaseComponentDriver {
  private props: Partial<RatingsProps> = {};

  constructor() {
    super('Ratings');
  }

  when: any = {
    rendered: () => {
      render(<Ratings {...(this.props as RatingsProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Ratings {...(this.props as RatingsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<RatingsProps>) => {
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
