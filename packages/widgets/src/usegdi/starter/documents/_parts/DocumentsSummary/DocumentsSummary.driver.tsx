import React from 'react';
import { render, fireDocument } from '@testing-library/react';
import { DocumentsSummary, DocumentsSummaryProps } from './DocumentsSummary';
import { BaseComponentDriver } from 'testing-base';

export class DocumentsSummaryDriver extends BaseComponentDriver {
  private props: Partial<DocumentsSummaryProps> = {};

  constructor() {
    super('DocumentsSummary');
  }

  when: any = {
    rendered: () => {
      render(<DocumentsSummary {...(this.props as DocumentsSummaryProps)} />);
      return this;
    },
    clicked: () => {
      fireDocument.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<DocumentsSummary {...(this.props as DocumentsSummaryProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<DocumentsSummaryProps>) => {
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
