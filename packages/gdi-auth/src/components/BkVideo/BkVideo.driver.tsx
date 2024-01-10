import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BkVideo, BkVideoProps } from './BkVideo';
import { BaseComponentDriver } from 'testing-base';

export class BkVideoDriver extends BaseComponentDriver {
  private props: Partial<BkVideoProps> = {};

  constructor() {
    super('BkVideo');
  }

  when: any = {
    rendered: () => {
      render(<BkVideo {...(this.props as BkVideoProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<BkVideo {...(this.props as BkVideoProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<BkVideoProps>) => {
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
