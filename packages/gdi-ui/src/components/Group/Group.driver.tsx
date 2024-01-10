import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Group, GroupProps } from './Group';
import { BaseComponentDriver } from 'testing-base';

export class GroupDriver extends BaseComponentDriver {
  private props: Partial<GroupProps> = {};

  constructor() {
    super('Group');
  }

  when: any = {
    rendered: () => {
      render(<Group {...(this.props as GroupProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Group {...(this.props as GroupProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<GroupProps>) => {
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
