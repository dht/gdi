import { render, fireEvent } from '@testing-library/react';
import { Submit, SubmitProps } from './Submit';
import { BaseComponentDriver } from 'testing-base';

export class SubmitDriver extends BaseComponentDriver {
  private props: Partial<SubmitProps> = {};

  constructor() {
    super('Submit');
  }

  when: any = {
    rendered: () => {
      render(<Submit {...(this.props as SubmitProps)} />);
      return this;
    },
    click: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
  };

  given: any = {
    props: (props: Partial<SubmitProps>) => {
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
