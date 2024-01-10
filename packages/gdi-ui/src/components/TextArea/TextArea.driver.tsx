import { render, fireEvent } from '@testing-library/react';
import { TextArea, TextAreaProps } from './TextArea';
import { BaseComponentDriver } from 'testing-base';

export class TextAreaDriver extends BaseComponentDriver {
  private props: Partial<TextAreaProps> = {};

  constructor() {
    super('TextArea');
  }

  when: any = {
    rendered: () => {
      render(<TextArea {...(this.props as TextAreaProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<TextArea {...(this.props as TextAreaProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TextAreaProps>) => {
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
