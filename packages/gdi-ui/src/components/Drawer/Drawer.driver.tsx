import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Drawer, DrawerProps } from './Drawer';
import { BaseComponentDriver } from 'testing-base';

export class DrawerDriver extends BaseComponentDriver {
  private props: Partial<DrawerProps> = {};

  constructor() {
    super('Drawer');
  }

  when: any = {
    rendered: () => {
      render(<Drawer {...(this.props as DrawerProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Drawer {...(this.props as DrawerProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<DrawerProps>) => {
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
