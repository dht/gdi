import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Midi, MidiProps } from './Midi';
import { BaseComponentDriver } from 'testing-base';

export class MidiDriver extends BaseComponentDriver {
  private props: Partial<MidiProps> = {};

  constructor() {
    super('Midi');
  }

  when: any = {
    rendered: () => {
      render(<Midi {...(this.props as MidiProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Midi {...(this.props as MidiProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<MidiProps>) => {
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
