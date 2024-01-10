import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PrivacyPolicyPage, PrivacyPolicyPageProps } from './PrivacyPolicyPage';
import { BaseComponentDriver } from 'testing-base';

export class PrivacyPolicyPageDriver extends BaseComponentDriver {
  private props: Partial<PrivacyPolicyPageProps> = {};

  constructor() {
    super('PrivacyPolicyPage');
  }

  when: any = {
    rendered: () => {
      render(<PrivacyPolicyPage {...(this.props as PrivacyPolicyPageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <PrivacyPolicyPage {...(this.props as PrivacyPolicyPageProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<PrivacyPolicyPageProps>) => {
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
