import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from './Button';
import { BaseComponentDriver } from 'testing-base';

export class ButtonDriver extends BaseComponentDriver {
  private props: Partial<ButtonProps> = {};

  constructor() {
    super('Button');
  }

  when: any = {
    rendered: () => {
      render(<Button {...(this.props as ButtonProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Button {...(this.props as ButtonProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ButtonProps>) => {
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
