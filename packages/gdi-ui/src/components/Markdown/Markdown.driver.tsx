import { render, fireEvent } from '@testing-library/react';
import { Markdown, MarkdownProps } from './Markdown';
import { BaseComponentDriver } from 'testing-base';

export class MarkdownDriver extends BaseComponentDriver {
  private props: Partial<MarkdownProps> = {};

  constructor() {
    super('Markdown');
  }

  when: any = {
    rendered: () => {
      render(<Markdown {...(this.props as MarkdownProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Markdown {...(this.props as MarkdownProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<MarkdownProps>) => {
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
