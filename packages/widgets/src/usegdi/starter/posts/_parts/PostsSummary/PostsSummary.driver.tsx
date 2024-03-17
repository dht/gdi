import React from 'react';
import { render, firePost } from '@testing-library/react';
import { PostsSummary, PostsSummaryProps } from './PostsSummary';
import { BaseComponentDriver } from 'testing-base';

export class PostsSummaryDriver extends BaseComponentDriver {
  private props: Partial<PostsSummaryProps> = {};

  constructor() {
    super('PostsSummary');
  }

  when: any = {
    rendered: () => {
      render(<PostsSummary {...(this.props as PostsSummaryProps)} />);
      return this;
    },
    clicked: () => {
      firePost.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<PostsSummary {...(this.props as PostsSummaryProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<PostsSummaryProps>) => {
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
