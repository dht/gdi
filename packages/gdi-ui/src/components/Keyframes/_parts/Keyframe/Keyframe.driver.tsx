import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Keyframe, KeyframeProps } from './Keyframe';
import { BaseComponentDriver } from 'testing-base';

export class KeyframeDriver extends BaseComponentDriver {
  private props: Partial<KeyframeProps> = {};

  constructor() {
    super('Keyframe');
  }

  when: any = {
    rendered: () => {
      render(<Keyframe {...(this.props as KeyframeProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Keyframe {...(this.props as KeyframeProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<KeyframeProps>) => {
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
