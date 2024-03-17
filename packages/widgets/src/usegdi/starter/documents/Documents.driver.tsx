import React from 'react';
import { render, fireDocument } from '@testing-library/react';
import { Documents, DocumentsProps } from './Documents';
import { BaseComponentDriver } from 'testing-base';

export class DocumentsDriver extends BaseComponentDriver {
  private props: Partial<DocumentsProps> = {};

  constructor() {
    super('Documents');
  }

  when: any = {
    rendered: () => {
      render(<Documents {...(this.props as DocumentsProps)} />);
      return this;
    },
    clicked: () => {
      fireDocument.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Documents {...(this.props as DocumentsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<DocumentsProps>) => {
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
