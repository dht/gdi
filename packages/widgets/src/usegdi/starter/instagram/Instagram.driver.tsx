import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Instagram, InstagramProps } from './Instagram';
import { BaseComponentDriver } from 'testing-base';

export class InstagramDriver extends BaseComponentDriver {
  private props: Partial<InstagramProps> = {};

  constructor() {
    super('Instagram');
  }

  when: any = {
    rendered: () => {
      render(<Instagram {...(this.props as InstagramProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Instagram {...(this.props as InstagramProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<InstagramProps>) => {
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
