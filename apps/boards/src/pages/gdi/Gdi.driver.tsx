import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Gdi, GdiProps } from './Gdi';
import { BaseComponentDriver } from 'testing-base';

export class GdiDriver extends BaseComponentDriver {
  private props: Partial<GdiProps> = {};

  constructor() {
    super('Gdi');
  }

  when: any = {
    rendered: () => {
      render(<Gdi {...(this.props as GdiProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Gdi {...(this.props as GdiProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<GdiProps>) => {
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
