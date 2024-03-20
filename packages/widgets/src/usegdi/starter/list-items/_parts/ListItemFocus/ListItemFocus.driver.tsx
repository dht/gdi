import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ListItemFocus, ListItemFocusProps } from './ListItemFocus';
import { BaseComponentDriver } from 'testing-base';

export class ListItemFocusDriver extends BaseComponentDriver {
  private props: Partial<ListItemFocusProps> = {};

  constructor() {
    super('ListItemFocus');
  }

  when: any = {
    rendered: () => {
      render(<ListItemFocus {...(this.props as ListItemFocusProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ListItemFocus {...(this.props as ListItemFocusProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ListItemFocusProps>) => {
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
