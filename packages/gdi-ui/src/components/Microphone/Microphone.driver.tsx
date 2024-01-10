import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Microphone, MicrophoneProps } from './Microphone';
import { BaseComponentDriver } from 'testing-base';

export class MicrophoneDriver extends BaseComponentDriver {
  private props: Partial<MicrophoneProps> = {};

  constructor() {
    super('Microphone');
  }

  when: any = {
    rendered: () => {
      render(<Microphone {...(this.props as MicrophoneProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Microphone {...(this.props as MicrophoneProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<MicrophoneProps>) => {
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
