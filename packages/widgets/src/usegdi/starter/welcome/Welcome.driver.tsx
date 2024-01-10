import { render, fireEvent } from '@testing-library/react';
import { Welcome, WelcomeProps } from './Welcome';
import { BaseComponentDriver } from 'testing-base';

export class WelcomeDriver extends BaseComponentDriver {
  private props: Partial<WelcomeProps> = {};

  constructor() {
    super('Welcome');
  }

  when: any = {
    rendered: () => {
      render(<Welcome {...(this.props as WelcomeProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Welcome {...(this.props as WelcomeProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<WelcomeProps>) => {
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
