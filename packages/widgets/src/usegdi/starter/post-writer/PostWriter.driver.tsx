import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostWriter, PostWriterProps } from './PostWriter';
import { BaseComponentDriver } from 'testing-base';

export class PostWriterDriver extends BaseComponentDriver {
  private props: Partial<PostWriterProps> = {};

  constructor() {
    super('PostWriter');
  }

  when: any = {
    rendered: () => {
      render(<PostWriter {...(this.props as PostWriterProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<PostWriter {...(this.props as PostWriterProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<PostWriterProps>) => {
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
