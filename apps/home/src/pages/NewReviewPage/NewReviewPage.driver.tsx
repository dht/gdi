import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NewReviewPage, NewReviewPageProps } from './NewReviewPage';
import { BaseComponentDriver } from 'testing-base';

export class NewReviewPageDriver extends BaseComponentDriver {
  private props: Partial<NewReviewPageProps> = {};

  constructor() {
    super('NewReviewPage');
  }

  when: any = {
    rendered: () => {
      render(<NewReviewPage {...(this.props as NewReviewPageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <NewReviewPage {...(this.props as NewReviewPageProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<NewReviewPageProps>) => {
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
