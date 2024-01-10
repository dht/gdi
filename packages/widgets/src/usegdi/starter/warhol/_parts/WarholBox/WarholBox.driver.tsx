import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WarholBox, WarholBoxProps } from './WarholBox';
import { BaseComponentDriver } from 'testing-base';

export class WarholBoxDriver extends BaseComponentDriver {
  private props: Partial<WarholBoxProps> = {};

  constructor() {
    super('WarholBox');
  }

  when: any = {
    rendered: () => {
      render(<WarholBox {...(this.props as WarholBoxProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<WarholBox {...(this.props as WarholBoxProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<WarholBoxProps>) => {
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
