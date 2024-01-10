import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Sessions, SessionsProps } from './Sessions';
import { BaseComponentDriver } from 'testing-base';

export class SessionsDriver extends BaseComponentDriver {
  private props: Partial<SessionsProps> = {};

  constructor() {
    super('Sessions');
  }

  when: any = {
    rendered: () => {
      render(<Sessions {...(this.props as SessionsProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Sessions {...(this.props as SessionsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<SessionsProps>) => {
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
