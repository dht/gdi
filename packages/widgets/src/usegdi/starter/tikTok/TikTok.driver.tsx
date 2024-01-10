import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TikTok, TikTokProps } from './TikTok';
import { BaseComponentDriver } from 'testing-base';

export class TikTokDriver extends BaseComponentDriver {
  private props: Partial<TikTokProps> = {};

  constructor() {
    super('TikTok');
  }

  when: any = {
    rendered: () => {
      render(<TikTok {...(this.props as TikTokProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<TikTok {...(this.props as TikTokProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TikTokProps>) => {
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
