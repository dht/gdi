import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WarholMouth, WarholMouthProps } from './WarholMouth';
import { BaseComponentDriver } from 'testing-base';

export class WarholMouthDriver extends BaseComponentDriver {
  private props: Partial<WarholMouthProps> = {};

  constructor() {
    super('WarholMouth');
  }

  when: any = {
    rendered: () => {
      render(<WarholMouth {...(this.props as WarholMouthProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<WarholMouth {...(this.props as WarholMouthProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<WarholMouthProps>) => {
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
