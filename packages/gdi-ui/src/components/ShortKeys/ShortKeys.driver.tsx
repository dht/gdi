import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ShortKeys, ShortKeysProps } from './ShortKeys';
import { BaseComponentDriver } from 'testing-base';

export class ShortKeysDriver extends BaseComponentDriver {
  private props: Partial<ShortKeysProps> = {};

  constructor() {
    super('ShortKeys');
  }

  when: any = {
    rendered: () => {
      render(<ShortKeys {...(this.props as ShortKeysProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ShortKeys {...(this.props as ShortKeysProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ShortKeysProps>) => {
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
