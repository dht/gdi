import { render, fireEvent } from '@testing-library/react';
import { EditorJson, EditorJsonProps } from './EditorJson';
import { BaseComponentDriver } from 'testing-base';

export class EditorJsonDriver extends BaseComponentDriver {
  private props: Partial<EditorJsonProps> = {};

  constructor() {
    super('EditorJson');
  }

  when: any = {
    rendered: () => {
      render(<EditorJson {...(this.props as EditorJsonProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<EditorJson {...(this.props as EditorJsonProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<EditorJsonProps>) => {
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
