import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Label, LabelProps } from './Label';
import { BaseComponentDriver } from 'testing-base';

export class LabelDriver extends BaseComponentDriver {
  private props: Partial<LabelProps> = {};

  constructor() {
    super('Label');
  }

  when: any = {
    rendered: () => {
      render(<Label {...(this.props as LabelProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Label {...(this.props as LabelProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<LabelProps>) => {
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
