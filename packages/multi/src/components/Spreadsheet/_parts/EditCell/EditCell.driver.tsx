import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditCell, EditCellProps } from './EditCell';
import { BaseComponentDriver } from 'testing-base';

export class EditCellDriver extends BaseComponentDriver {
  private props: Partial<EditCellProps> = {};

  constructor() {
    super('EditCell');
  }

  when: any = {
    rendered: () => {
      render(<EditCell {...(this.props as EditCellProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<EditCell {...(this.props as EditCellProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<EditCellProps>) => {
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
