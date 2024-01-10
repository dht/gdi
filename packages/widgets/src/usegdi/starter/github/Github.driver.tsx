import { render, fireEvent } from '@testing-library/react';
import { Github, GithubProps } from './Github';
import { BaseComponentDriver } from 'testing-base';

export class GithubDriver extends BaseComponentDriver {
  private props: Partial<GithubProps> = {};

  constructor() {
    super('Github');
  }

  when: any = {
    rendered: () => {
      render(<Github {...(this.props as GithubProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Github {...(this.props as GithubProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<GithubProps>) => {
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
