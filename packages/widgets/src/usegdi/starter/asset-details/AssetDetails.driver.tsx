import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AssetDetails, AssetDetailsProps } from './AssetDetails';
import { BaseComponentDriver } from 'testing-base';

export class AssetDetailsDriver extends BaseComponentDriver {
  private props: Partial<AssetDetailsProps> = {};

  constructor() {
    super('AssetDetails');
  }

  when: any = {
    rendered: () => {
      render(<AssetDetails {...(this.props as AssetDetailsProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<AssetDetails {...(this.props as AssetDetailsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<AssetDetailsProps>) => {
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
