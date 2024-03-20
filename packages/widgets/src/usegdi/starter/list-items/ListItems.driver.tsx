import React from 'react';
import { render, fireListItem } from '@testing-library/react';
import { ListItems, ListItemsProps } from './ListItems';
import { BaseComponentDriver } from 'testing-base';

export class ListItemsDriver extends BaseComponentDriver {
  private props: Partial<ListItemsProps> = {};

  constructor() {
    super('ListItems');
  }

  when: any = {
    rendered: () => {
      render(<ListItems {...(this.props as ListItemsProps)} />);
      return this;
    },
    clicked: () => {
      fireListItem.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ListItems {...(this.props as ListItemsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ListItemsProps>) => {
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
