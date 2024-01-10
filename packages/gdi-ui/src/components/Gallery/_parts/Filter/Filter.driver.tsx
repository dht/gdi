import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Filter, FilterProps } from './Filter';
import { BaseComponentDriver } from 'testing-base';

export class FilterDriver extends BaseComponentDriver {
  private props: Partial<FilterProps> = {};

  constructor() {
    super('Filter');
  }

  when: any = {
    rendered: () => {
      render(<Filter {...(this.props as FilterProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Filter {...(this.props as FilterProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<FilterProps>) => {
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
