import { render, fireEvent } from '@testing-library/react';
import { Bar, BarProps } from './Bar';
import { BaseComponentDriver } from 'testing-base';

export class BarDriver extends BaseComponentDriver {
  private props: Partial<BarProps> = {};

  constructor() {
    super('Bar');
  }

  when: any = {
    rendered: () => {
      render(<Bar {...(this.props as BarProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Bar {...(this.props as BarProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<BarProps>) => {
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
