import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DocsMenu, DocsMenuProps } from './DocsMenu';
import { BaseComponentDriver } from 'testing-base';

export class DocsMenuDriver extends BaseComponentDriver {
  private props: Partial<DocsMenuProps> = {};

  constructor() {
    super('DocsMenu');
  }

  when: any = {
    rendered: () => {
      render(<DocsMenu {...(this.props as DocsMenuProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<DocsMenu {...(this.props as DocsMenuProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<DocsMenuProps>) => {
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
