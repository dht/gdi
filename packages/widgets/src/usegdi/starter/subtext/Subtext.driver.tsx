import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Subtext, SubtextProps } from './Subtext';
import { BaseComponentDriver } from 'testing-base';

export class SubtextDriver extends BaseComponentDriver {
  private props: Partial<SubtextProps> = {};

  constructor() {
    super('Subtext');
  }

  when: any = {
    rendered: () => {
      render(<Subtext {...(this.props as SubtextProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Subtext {...(this.props as SubtextProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<SubtextProps>) => {
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
