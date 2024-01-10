import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DetailsImages, DetailsImagesProps } from './DetailsImages';
import { BaseComponentDriver } from 'testing-base';

export class DetailsImagesDriver extends BaseComponentDriver {
  private props: Partial<DetailsImagesProps> = {};

  constructor() {
    super('DetailsImages');
  }

  when: any = {
    rendered: () => {
      render(<DetailsImages {...(this.props as DetailsImagesProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <DetailsImages {...(this.props as DetailsImagesProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<DetailsImagesProps>) => {
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
