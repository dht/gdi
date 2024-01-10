import { render, fireEvent } from '@testing-library/react';
import { Form } from './Form';
import { BaseComponentDriver } from 'testing-base';
import { IFormProps } from './Form.types';

export class FormDriver extends BaseComponentDriver {
  private props: Partial<IFormProps> = {};

  constructor() {
    super('Form');
  }

  when: any = {
    rendered: () => {
      render(<Form {...(this.props as IFormProps)} />);
      return this;
    },
    click: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
  };

  given: any = {
    props: (props: Partial<IFormProps>) => {
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
