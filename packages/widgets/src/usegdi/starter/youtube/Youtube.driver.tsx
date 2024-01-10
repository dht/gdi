import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Youtube, YoutubeProps } from './Youtube';
import { BaseComponentDriver } from 'testing-base';

export class YoutubeDriver extends BaseComponentDriver {
  private props: Partial<YoutubeProps> = {};

  constructor() {
    super('Youtube');
  }

  when: any = {
    rendered: () => {
      render(<Youtube {...(this.props as YoutubeProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Youtube {...(this.props as YoutubeProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<YoutubeProps>) => {
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
