import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TermsOfUsePage, TermsOfUsePageProps } from './TermsOfUsePage';
import { BaseComponentDriver } from 'testing-base';

export class TermsOfUsePageDriver extends BaseComponentDriver {
  private props: Partial<TermsOfUsePageProps> = {};

  constructor() {
    super('TermsOfUsePage');
  }

  when: any = {
    rendered: () => {
      render(<TermsOfUsePage {...(this.props as TermsOfUsePageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <TermsOfUsePage {...(this.props as TermsOfUsePageProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<TermsOfUsePageProps>) => {
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
