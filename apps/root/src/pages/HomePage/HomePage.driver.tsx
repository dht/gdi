import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HomePage, HomePageProps } from './HomePage';
import { BaseComponentDriver } from 'testing-base';

export class HomePageDriver extends BaseComponentDriver {
  private props: Partial<HomePageProps> = {};

  constructor() {
    super('HomePage');
  }

  when: any = {
    rendered: () => {
      render(<HomePage {...(this.props as HomePageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<HomePage {...(this.props as HomePageProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<HomePageProps>) => {
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
