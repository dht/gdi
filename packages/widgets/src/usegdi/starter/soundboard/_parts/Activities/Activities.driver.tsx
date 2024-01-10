import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Activities, ActivitiesProps } from './Activities';
import { BaseComponentDriver } from 'testing-base';

export class ActivitiesDriver extends BaseComponentDriver {
  private props: Partial<ActivitiesProps> = {};

  constructor() {
    super('Activities');
  }

  when: any = {
    rendered: () => {
      render(<Activities {...(this.props as ActivitiesProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Activities {...(this.props as ActivitiesProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ActivitiesProps>) => {
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
