import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { List, ListProps } from './List';
import { BaseComponentDriver } from 'testing-base';

export class ListDriver extends BaseComponentDriver {
  private props: Partial<ListProps> = {};

  constructor() {
    super('List');
  }

  when: any = {
    rendered: () => {
      render(<List {...(this.props as ListProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<List {...(this.props as ListProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ListProps>) => {
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
