import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DetailsSummary, DetailsSummaryProps } from './DetailsSummary';
import { BaseComponentDriver } from 'testing-base';

export class DetailsSummaryDriver extends BaseComponentDriver {
  private props: Partial<DetailsSummaryProps> = {};

  constructor() {
    super('DetailsSummary');
  }

  when: any = {
    rendered: () => {
      render(<DetailsSummary {...(this.props as DetailsSummaryProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <DetailsSummary {...(this.props as DetailsSummaryProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<DetailsSummaryProps>) => {
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
