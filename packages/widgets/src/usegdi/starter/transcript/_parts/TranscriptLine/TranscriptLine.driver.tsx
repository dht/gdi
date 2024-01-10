import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TranscriptLine, TranscriptLineProps } from './TranscriptLine';
import { BaseComponentDriver } from 'testing-base';

export class TranscriptLineDriver extends BaseComponentDriver {
  private props: Partial<TranscriptLineProps> = {};

  constructor() {
    super('TranscriptLine');
  }

  when: any = {
    rendered: () => {
      render(<TranscriptLine {...(this.props as TranscriptLineProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<TranscriptLine {...(this.props as TranscriptLineProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TranscriptLineProps>) => {
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
