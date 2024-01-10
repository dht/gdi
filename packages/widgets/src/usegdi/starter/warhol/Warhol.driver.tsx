import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Warhol, WarholProps } from './Warhol';
import { BaseComponentDriver } from 'testing-base';

export class WarholDriver extends BaseComponentDriver {
  private props: Partial<WarholProps> = {};

  constructor() {
    super('Warhol');
  }

  when: any = {
    rendered: () => {
      render(<Warhol {...(this.props as WarholProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Warhol {...(this.props as WarholProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<WarholProps>) => {
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
