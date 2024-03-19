import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostWriterActions, PostWriterActionsProps } from './PostWriterActions';
import { BaseComponentDriver } from 'testing-base';

export class PostWriterActionsDriver extends BaseComponentDriver {
  private props: Partial<PostWriterActionsProps> = {};

  constructor() {
    super('PostWriterActions');
  }

  when: any = {
    rendered: () => {
      render(<PostWriterActions {...(this.props as PostWriterActionsProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<PostWriterActions {...(this.props as PostWriterActionsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<PostWriterActionsProps>) => {
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
