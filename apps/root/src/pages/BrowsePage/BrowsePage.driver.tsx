import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowsePage, BrowsePageProps } from './BrowsePage';
import { BaseComponentDriver } from 'testing-base';

export class BrowsePageDriver extends BaseComponentDriver {
  private props: Partial<BrowsePageProps> = {};

  constructor() {
    super('BrowsePage');
  }

  when: any = {
    rendered: () => {
      render(<BrowsePage {...(this.props as BrowsePageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<BrowsePage {...(this.props as BrowsePageProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<BrowsePageProps>) => {
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
