import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProductTour, ProductTourProps } from './ProductTour';
import { BaseComponentDriver } from 'testing-base';

export class ProductTourDriver extends BaseComponentDriver {
  private props: Partial<ProductTourProps> = {};

  constructor() {
    super('ProductTour');
  }

  when: any = {
    rendered: () => {
      render(<ProductTour {...(this.props as ProductTourProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ProductTour {...(this.props as ProductTourProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ProductTourProps>) => {
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
