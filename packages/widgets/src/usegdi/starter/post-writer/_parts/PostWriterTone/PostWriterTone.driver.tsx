import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostWriterTone, PostWriterToneProps } from './PostWriterTone';
import { BaseComponentDriver } from 'testing-base';

export class PostWriterToneDriver extends BaseComponentDriver {
  private props: Partial<PostWriterToneProps> = {};

  constructor() {
    super('PostWriterTone');
  }

  when: any = {
    rendered: () => {
      render(<PostWriterTone {...(this.props as PostWriterToneProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<PostWriterTone {...(this.props as PostWriterToneProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<PostWriterToneProps>) => {
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
