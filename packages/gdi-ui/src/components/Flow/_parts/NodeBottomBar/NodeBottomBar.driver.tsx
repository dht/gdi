import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NodeBottomBar, NodeBottomBarProps } from './NodeBottomBar';
import { BaseComponentDriver } from 'testing-base';

export class NodeBottomBarDriver extends BaseComponentDriver {
  private props: Partial<NodeBottomBarProps> = {};

  constructor() {
    super('NodeBottomBar');
  }

  when: any = {
    rendered: () => {
      render(<NodeBottomBar {...(this.props as NodeBottomBarProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<NodeBottomBar {...(this.props as NodeBottomBarProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<NodeBottomBarProps>) => {
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
