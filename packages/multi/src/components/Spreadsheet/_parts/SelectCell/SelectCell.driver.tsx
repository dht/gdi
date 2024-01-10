import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SelectCell, SelectCellProps } from './SelectCell';
import { BaseComponentDriver } from 'testing-base';

export class SelectCellDriver extends BaseComponentDriver {
  private props: Partial<SelectCellProps> = {};

  constructor() {
    super('SelectCell');
  }

  when: any = {
    rendered: () => {
      render(<SelectCell {...(this.props as SelectCellProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<SelectCell {...(this.props as SelectCellProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<SelectCellProps>) => {
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
