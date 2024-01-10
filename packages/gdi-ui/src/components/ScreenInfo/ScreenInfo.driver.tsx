import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ScreenInfo, ScreenInfoProps } from './ScreenInfo';
import { BaseComponentDriver } from 'testing-base';

export class ScreenInfoDriver extends BaseComponentDriver {
  private props: Partial<ScreenInfoProps> = {};

  constructor() {
    super('ScreenInfo');
  }

  when: any = {
    rendered: () => {
      render(<ScreenInfo {...(this.props as ScreenInfoProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ScreenInfo {...(this.props as ScreenInfoProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ScreenInfoProps>) => {
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
