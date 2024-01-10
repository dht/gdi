import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WarholEyes, WarholEyesProps } from './WarholEyes';
import { BaseComponentDriver } from 'testing-base';

export class WarholEyesDriver extends BaseComponentDriver {
  private props: Partial<WarholEyesProps> = {};

  constructor() {
    super('WarholEyes');
  }

  when: any = {
    rendered: () => {
      render(<WarholEyes {...(this.props as WarholEyesProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<WarholEyes {...(this.props as WarholEyesProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<WarholEyesProps>) => {
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
