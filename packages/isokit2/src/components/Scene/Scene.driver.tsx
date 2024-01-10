import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Scene, SceneProps } from './Scene';
import { BaseComponentDriver } from 'testing-base';

export class SceneDriver extends BaseComponentDriver {
  private props: Partial<SceneProps> = {};

  constructor() {
    super('Scene');
  }

  when: any = {
    rendered: () => {
      render(<Scene {...(this.props as SceneProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Scene {...(this.props as SceneProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<SceneProps>) => {
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
