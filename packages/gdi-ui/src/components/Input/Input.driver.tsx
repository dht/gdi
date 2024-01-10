import { render, fireEvent } from '@testing-library/react';
import { Input, InputProps } from './Input';
import { BaseComponentDriver } from 'testing-base';

export class InputDriver extends BaseComponentDriver {
  private props: Partial<InputProps> = {};

  constructor() {
    super('Input');
  }

  when: any = {
    rendered: () => {
      render(<Input {...(this.props as InputProps)} />);
      return this;
    },
    click: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
  };

  given: any = {
    props: (props: Partial<InputProps>) => {
      this.props = props;
      return this;
    },
  };

  get = {
    containerClassName: () => {
      return this.wrapper.className;
    },
  };
}
