import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StartPlay, StartPlayProps } from './StartPlay';
import { BaseComponentDriver } from 'testing-base';

export class StartPlayDriver extends BaseComponentDriver {
  private props: Partial<StartPlayProps> = {};

  constructor() {
    super('StartPlay');
  }

  when: any = {
    rendered: () => {
      render(<StartPlay {...(this.props as StartPlayProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<StartPlay {...(this.props as StartPlayProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<StartPlayProps>) => {
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
