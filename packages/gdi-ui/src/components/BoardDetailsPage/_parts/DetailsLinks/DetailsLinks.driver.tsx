import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DetailsLinks, DetailsLinksProps } from './DetailsLinks';
import { BaseComponentDriver } from 'testing-base';

export class DetailsLinksDriver extends BaseComponentDriver {
  private props: Partial<DetailsLinksProps> = {};

  constructor() {
    super('DetailsLinks');
  }

  when: any = {
    rendered: () => {
      render(<DetailsLinks {...(this.props as DetailsLinksProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <DetailsLinks {...(this.props as DetailsLinksProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<DetailsLinksProps>) => {
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
