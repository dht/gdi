import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Bezier, BezierProps } from './Bezier';
import { BaseComponentDriver } from 'testing-base';

export class BezierDriver extends BaseComponentDriver {
  private props: Partial<BezierProps> = {};

  constructor() {
    super('Bezier');
  }

  when: any = {
    rendered: () => {
      render(<Bezier {...(this.props as BezierProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Bezier {...(this.props as BezierProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<BezierProps>) => {
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
