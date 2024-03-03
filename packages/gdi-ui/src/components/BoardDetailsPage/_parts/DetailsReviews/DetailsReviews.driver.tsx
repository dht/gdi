import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DetailsReviews, DetailsReviewsProps } from './DetailsReviews';
import { BaseComponentDriver } from 'testing-base';

export class DetailsReviewsDriver extends BaseComponentDriver {
  private props: Partial<DetailsReviewsProps> = {};

  constructor() {
    super('DetailsReviews');
  }

  when: any = {
    rendered: () => {
      render(<DetailsReviews {...(this.props as DetailsReviewsProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <DetailsReviews {...(this.props as DetailsReviewsProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<DetailsReviewsProps>) => {
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
