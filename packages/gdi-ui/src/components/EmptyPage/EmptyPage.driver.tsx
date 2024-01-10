import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EmptyPageProps } from './EmptyPage';
import { EmptyPage } from './EmptyPage';
import { BaseComponentDriver } from 'testing-base';

export class EmptyPageDriver extends BaseComponentDriver {
  private props: Partial<EmptyPageProps> = {};

  constructor() {
    super('EmptyPage');
  }

  when: any = {
    rendered: () => {
      render(<EmptyPage {...(this.props as EmptyPageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<EmptyPage {...(this.props as EmptyPageProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<EmptyPageProps>) => {
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
