import { render, fireEvent } from '@testing-library/react';
import { Table, TableProps } from './Table';
import { BaseComponentDriver } from 'testing-base';

export class TableDriver extends BaseComponentDriver {
  private props: Partial<TableProps> = {};

  constructor() {
    super('Table');
  }

  when: any = {
    rendered: () => {
      render(<Table {...(this.props as TableProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Table {...(this.props as TableProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TableProps>) => {
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
