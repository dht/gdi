import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostWriterViews, PostWriterViewsProps } from './PostWriterViews';
import { BaseComponentDriver } from 'testing-base';

export class PostWriterViewsDriver extends BaseComponentDriver {
  private props: Partial<PostWriterViewsProps> = {};

  constructor() {
    super('PostWriterViews');
  }

  when: any = {
    rendered: () => {
      render(<PostWriterViews {...(this.props as PostWriterViewsProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<PostWriterViews {...(this.props as PostWriterViewsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<PostWriterViewsProps>) => {
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
