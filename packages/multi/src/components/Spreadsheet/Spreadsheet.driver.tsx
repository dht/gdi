import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Spreadsheet, SpreadsheetProps } from './Spreadsheet';
import { BaseComponentDriver } from 'testing-base';

export class SpreadsheetDriver extends BaseComponentDriver {
  private props: Partial<SpreadsheetProps> = {};

  constructor() {
    super('Spreadsheet');
  }

  when: any = {
    rendered: () => {
      render(<Spreadsheet {...(this.props as SpreadsheetProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Spreadsheet {...(this.props as SpreadsheetProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<SpreadsheetProps>) => {
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
