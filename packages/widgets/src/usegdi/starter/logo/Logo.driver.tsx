import { render, fireEvent } from '@testing-library/react';
import { Logo, LogoProps } from './Logo';
import { BaseComponentDriver } from 'testing-base';

export class LogoDriver extends BaseComponentDriver {
  private props: Partial<LogoProps> = {};

  constructor() {
    super('Logo');
  }

  when: any = {
    rendered: () => {
      render(<Logo {...(this.props as LogoProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Logo {...(this.props as LogoProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<LogoProps>) => {
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
