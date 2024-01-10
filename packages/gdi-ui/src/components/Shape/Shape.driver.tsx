import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Shape, ShapeProps } from './Shape';
import { BaseComponentDriver } from 'testing-base';

export class ShapeDriver extends BaseComponentDriver {
  private props: Partial<ShapeProps> = {};

  constructor() {
    super('Shape');
  }

  when: any = {
    rendered: () => {
      render(<Shape {...(this.props as ShapeProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Shape {...(this.props as ShapeProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ShapeProps>) => {
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
