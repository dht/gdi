import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DocsPage, DocsPageProps } from './DocsPage';
import { BaseComponentDriver } from 'testing-base';

export class DocsPageDriver extends BaseComponentDriver {
  private props: Partial<DocsPageProps> = {};

  constructor() {
    super('DocsPage');
  }

  when: any = {
    rendered: () => {
      render(<DocsPage {...(this.props as DocsPageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<DocsPage {...(this.props as DocsPageProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<DocsPageProps>) => {
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
