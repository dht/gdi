import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Docs, DocsProps } from './Docs';
import { BaseComponentDriver } from 'testing-base';

export class DocsDriver extends BaseComponentDriver {
  private props: Partial<DocsProps> = {};

  constructor() {
    super('Docs');
  }

  when: any = {
    rendered: () => {
      render(<Docs {...(this.props as DocsProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Docs {...(this.props as DocsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<DocsProps>) => {
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
