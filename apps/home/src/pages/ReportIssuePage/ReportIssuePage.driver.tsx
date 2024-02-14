import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ReportIssuePage, ReportIssuePageProps } from './ReportIssuePage';
import { BaseComponentDriver } from 'testing-base';

export class ReportIssuePageDriver extends BaseComponentDriver {
  private props: Partial<ReportIssuePageProps> = {};

  constructor() {
    super('ReportIssuePage');
  }

  when: any = {
    rendered: () => {
      render(<ReportIssuePage {...(this.props as ReportIssuePageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.container);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <ReportIssuePage {...(this.props as ReportIssuePageProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<ReportIssuePageProps>) => {
      this.props = props;
      return this;
    },
  };

  get = {
    WrapperClassName: () => {
      return this.container.className;
    },
    label: () => {
      return this.container.innerHTML;
    },
  };
}
