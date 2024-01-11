import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ITxt, TxtProps } from './Txt';
import { BaseComponentDriver } from 'testing-base';

export class TxtDriver extends BaseComponentDriver {
  private props: Partial<TxtProps> = {};

  constructor() {
    super('Txt');
  }

  when: any = {
    rendered: () => {
      render(<Txt {...(this.props as TxtProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Txt {...(this.props as TxtProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TxtProps>) => {
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
