import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DetailsApis, DetailsApisProps } from './DetailsApis';
import { BaseComponentDriver } from 'testing-base';

export class DetailsApisDriver extends BaseComponentDriver {
  private props: Partial<DetailsApisProps> = {};

  constructor() {
    super('DetailsApis');
  }

  when: any = {
    rendered: () => {
      render(<DetailsApis {...(this.props as DetailsApisProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <DetailsApis {...(this.props as DetailsApisProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<DetailsApisProps>) => {
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
