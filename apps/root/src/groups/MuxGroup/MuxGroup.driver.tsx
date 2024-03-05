import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxGroup, MuxGroupProps } from './MuxGroup';
import { BaseComponentDriver } from 'testing-base';

export class MuxGroupDriver extends BaseComponentDriver {
  private props: Partial<MuxGroupProps> = {};

  constructor() {
    super('MuxGroup');
  }

  when: any = {
    rendered: () => {
      render(<MuxGroup {...(this.props as MuxGroupProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<MuxGroup {...(this.props as MuxGroupProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<MuxGroupProps>) => {
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
