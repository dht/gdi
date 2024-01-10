import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Soundboard, SoundboardProps } from './Soundboard';
import { BaseComponentDriver } from 'testing-base';

export class SoundboardDriver extends BaseComponentDriver {
  private props: Partial<SoundboardProps> = {};

  constructor() {
    super('Soundboard');
  }

  when: any = {
    rendered: () => {
      render(<Soundboard {...(this.props as SoundboardProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Soundboard {...(this.props as SoundboardProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<SoundboardProps>) => {
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
