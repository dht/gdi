import { render, fireEvent } from '@testing-library/react';
import { EditorCode, EditorCodeProps } from './EditorCode';
import { BaseComponentDriver } from 'testing-base';

export class EditorCodeDriver extends BaseComponentDriver {
  private props: Partial<EditorCodeProps> = {};

  constructor() {
    super('EditorCode');
  }

  when: any = {
    rendered: () => {
      render(<EditorCode {...(this.props as EditorCodeProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<EditorCode {...(this.props as EditorCodeProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<EditorCodeProps>) => {
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
