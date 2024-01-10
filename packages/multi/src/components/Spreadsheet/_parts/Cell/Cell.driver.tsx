import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Cell, CellProps } from './Cell';
import { BaseComponentDriver } from 'testing-base';

export class CellDriver extends BaseComponentDriver {
  private props: Partial<CellProps> = {};

  constructor() {
    super('Cell');
  }

  when: any = {
    rendered: () => {
      render(<Cell {...(this.props as CellProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Cell {...(this.props as CellProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<CellProps>) => {
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
