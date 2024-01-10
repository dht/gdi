import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NodeTopBar, NodeTopBarProps } from './NodeTopBar';
import { BaseComponentDriver } from 'testing-base';

export class NodeTopBarDriver extends BaseComponentDriver {
  private props: Partial<NodeTopBarProps> = {};

  constructor() {
    super('NodeTopBar');
  }

  when: any = {
    rendered: () => {
      render(<NodeTopBar {...(this.props as NodeTopBarProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<NodeTopBar {...(this.props as NodeTopBarProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<NodeTopBarProps>) => {
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
