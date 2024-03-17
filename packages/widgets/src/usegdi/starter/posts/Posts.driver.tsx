import React from 'react';
import { render, firePost } from '@testing-library/react';
import { Posts, PostsProps } from './Posts';
import { BaseComponentDriver } from 'testing-base';

export class PostsDriver extends BaseComponentDriver {
  private props: Partial<PostsProps> = {};

  constructor() {
    super('Posts');
  }

  when: any = {
    rendered: () => {
      render(<Posts {...(this.props as PostsProps)} />);
      return this;
    },
    clicked: () => {
      firePost.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Posts {...(this.props as PostsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<PostsProps>) => {
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
