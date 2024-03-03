import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DetailsCta, DetailsCtaProps } from './DetailsCta';
import { BaseComponentDriver } from 'testing-base';

export class DetailsCtaDriver extends BaseComponentDriver {
  private props: Partial<DetailsCtaProps> = {};

  constructor() {
    super('DetailsCta');
  }

  when: any = {
    rendered: () => {
      render(<DetailsCta {...(this.props as DetailsCtaProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<DetailsCta {...(this.props as DetailsCtaProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<DetailsCtaProps>) => {
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
