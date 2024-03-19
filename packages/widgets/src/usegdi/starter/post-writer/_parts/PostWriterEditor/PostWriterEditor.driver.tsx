import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostWriterEditor, PostWriterEditorProps } from './PostWriterEditor';
import { BaseComponentDriver } from 'testing-base';

export class PostWriterEditorDriver extends BaseComponentDriver {
  private props: Partial<PostWriterEditorProps> = {};

  constructor() {
    super('PostWriterEditor');
  }

  when: any = {
    rendered: () => {
      render(<PostWriterEditor {...(this.props as PostWriterEditorProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<PostWriterEditor {...(this.props as PostWriterEditorProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<PostWriterEditorProps>) => {
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
