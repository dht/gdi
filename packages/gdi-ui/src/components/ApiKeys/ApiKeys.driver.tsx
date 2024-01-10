import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ApiKeys, ApiKeysProps } from './ApiKeys';
import { BaseComponentDriver } from 'testing-base';

export class ApiKeysDriver extends BaseComponentDriver {
  private props: Partial<ApiKeysProps> = {};

  constructor() {
    super('ApiKeys');
  }

  when: any = {
    rendered: () => {
      render(<ApiKeys {...(this.props as ApiKeysProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ApiKeys {...(this.props as ApiKeysProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ApiKeysProps>) => {
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
