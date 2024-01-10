import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GridView, GridViewProps } from './GridView';
import { BaseComponentDriver } from 'testing-base';

export class GridViewDriver extends BaseComponentDriver {
  private props: Partial<GridViewProps> = {};

  constructor() {
    super('GridView');
  }

  when: any = {
    rendered: () => {
      render(<GridView {...(this.props as GridViewProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<GridView {...(this.props as GridViewProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<GridViewProps>) => {
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
