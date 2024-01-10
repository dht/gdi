import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Transcript, TranscriptProps } from './Transcript';
import { BaseComponentDriver } from 'testing-base';

export class TranscriptDriver extends BaseComponentDriver {
  private props: Partial<TranscriptProps> = {};

  constructor() {
    super('Transcript');
  }

  when: any = {
    rendered: () => {
      render(<Transcript {...(this.props as TranscriptProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Transcript {...(this.props as TranscriptProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TranscriptProps>) => {
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
