import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DetailsHeader, DetailsHeaderProps } from './DetailsHeader';
import { BaseComponentDriver } from 'testing-base';

export class DetailsHeaderDriver extends BaseComponentDriver {
  private props: Partial<DetailsHeaderProps> = {};

  constructor() {
    super('DetailsHeader');
  }

  when: any = {
    rendered: () => {
      render(<DetailsHeader {...(this.props as DetailsHeaderProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <DetailsHeader {...(this.props as DetailsHeaderProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<DetailsHeaderProps>) => {
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
